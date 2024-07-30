import requests
from recipe_scrapers import scrape_html


url = 'https://addapinch.com/the-best-chocolate-cake-recipe-ever/'
name = 'me'
html = requests.get(url, headers={"User-Agent": f"Risotto Sampler {name}"}).content
scraper = scrape_html(html, org_url=url, wild_mode=True)

scraper.host()
scraper.title()
scraper.total_time()
scraper.image()
scraper.ingredients()

print(scraper.ingredients())