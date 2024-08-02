import requests
from recipe_scrapers import scrape_html
from flask_cors import CORS, cross_origin
from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


uri = "mongodb+srv://weewoo0413:wqqdy8fq4@cluster0.lbqcyam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

db = client['db1']
collection = db['test']

document = {"name": "sktech", "city": "pune"}
insert_doc = collection.insert_one(document)

print("inserted")

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)