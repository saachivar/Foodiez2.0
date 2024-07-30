import requests
from recipe_scrapers import scrape_html
from flask_cors import CORS, cross_origin
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000/"}})
@app.route('/ingredients', methods=['POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def predict():
    url = request.json
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
if __name__ == '__main__':
    app.run(debug=True)
    


