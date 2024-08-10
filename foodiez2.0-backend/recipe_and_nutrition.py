import requests
from recipe_scrapers import scrape_html
from flask_cors import CORS, cross_origin
from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
CORS(app, resources={r"/nutrition": {"origins": "http://localhost:3000"}, r"/ingredients": {"origins": "http://localhost:3000"}, 
                     r"/signin": {"origins": "http://localhost:3000/sign-in"}, r"/signup": {"origins": "http://localhost:3000/sign-up"}})


# MongoDB connection
uri = "mongodb+srv://weewoo0413:wqqdy8fq4@cluster0.lbqcyam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri, server_api=ServerApi('1'))

db = client.get_database("Foodiez2")  # Replace with your database name
users_collection = db.get_collection("users")  # Collection to store user data



# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

@app.route('/signin', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type','application/json'])
def signin():
    print("sign in received")
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Query the database for the user
    user = users_collection.find_one({"username": username})

    if user and user["password"] == password:
        return jsonify({"message": "Sign-in successful"}), 200
    elif user:
        return jsonify({"message": "Invalid credentials"}), 200
    else:
        return jsonify({"message:": "You don't have an account. Please create one"}), 401



@app.route('/')
def home():
    return "Welcome to the Score Predictor API!"

@app.route('/ingredients', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type','application/json'])
def ingredients():
    print("received")
    print(request.json)
    url = request.json
    print(url)
    name = 'me'
    html = requests.get(url, headers={"User-Agent": f"Risotto Sampler {name}"}).content
    scraper = scrape_html(html, org_url=url, wild_mode=True)

    scraper.host()
    scraper.title()
    scraper.total_time()
    scraper.image()
    scraper.ingredients()

    print(scraper.ingredients())
    return(scraper.ingredients())


@app.route('/nutrition', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type','application/json'])
def nutrition():
    print('received')
    input_string=(request.json)

    app_id = '723fe963'
    app_key = '8511d3f0349c28a8ff2c5af8d9894ca6'

    recipe = {"ingr": []}
    lines = input_string.strip().split('\n')
    
    for line in lines:
        # Clean up any extra spaces
        line = line.strip()
        recipe["ingr"].append(line)
    print(recipe)

    # Edamam Nutrition Analysis API endpoint
    url = "https://api.edamam.com/api/nutrition-details"

    # Send a POST request
    response = requests.post(url, json=recipe, params={"app_id": app_id, "app_key": app_key})

    # Check if the request was successful
    if response.status_code == 200:
    # Parse the JSON response
        data = response.json()
        nutrition_facts = {
            "Calories": data.get("calories", "N/A"),
            "Total Weight (g)": data.get("totalWeight", "N/A"),
            "Total Nutrients": {}
        }

        nutrients = data.get("totalNutrients", {})

        nutrients_to_extract = {
            "ENERC_KCAL": "Calories",
            "FAT": "Total Fat",
            "FASAT": "Saturated Fat",
            "CHOCDF": "Total Carbohydrates",
            "FIBTG": "Dietary Fiber",
            "SUGAR": "Sugars",
            "PROCNT": "Protein",
            "NA": "Sodium",
            "CHOLE": "Cholesterol"
        }

        for key, label in nutrients_to_extract.items():
            nutrient_info = nutrients.get(key, {})
            nutrition_facts["Total Nutrients"][label] = {
                "quantity": nutrient_info.get("quantity", "N/A"),
                "unit": nutrient_info.get("unit", "N/A")
            }

        nutrition_string = ""
        for fact, value in nutrition_facts.items():
            if fact == "Total Nutrients":
                nutrition_string += f"\n{fact}:\n"
                for nutrient, info in value.items():
                    nutrition_string += f"  {nutrient}: {info['quantity']} {info['unit']}\n"
            else:
                nutrition_string += f"{fact}: {value}\n"
        
    print(nutrition_string)
    return jsonify(nutrition_string)

# Sign-up route (optional, for creating new users)
@app.route('/signup', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type','application/json'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if the user already exists
    if users_collection.find_one({"username": username}):
        return jsonify({"message": "Username already exists"}), 409

    # Insert the new user into the database
    users_collection.insert_one({"username": username, "password": password})
    return jsonify({"message": "User created successfully"}), 201


    
if __name__ == '__main__':
    app.run(debug=True)

