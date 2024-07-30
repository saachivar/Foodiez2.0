import requests

# Replace these with your own values
app_id = '723fe963'
app_key = '8511d3f0349c28a8ff2c5af8d9894ca6'

# The recipe data you want to analyze
recipe = {
    "title": "Chicken Vesuvio",
    "ingr": [
        "1/2 cup olive oil",
        "5 cloves garlic, peeled",
    ]
}

# Edamam Nutrition Analysis API endpoint
url = "https://api.edamam.com/api/nutrition-details"

# Send a POST request
response = requests.post(url, json=recipe, params={"app_id": app_id, "app_key": app_key})

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    print(data)
else:
    print("Error:", response.status_code, response.text)
