from flask import Flask, request, jsonify, session
from flask_cors import CORS
import os
import os.path
from dotenv import load_dotenv
from firebase_admin import credentials, firestore, initialize_app   
import requests
app = Flask(__name__)
CORS(app, origins=["https://dobu-martial-class-ln7q.vercel.app"])
@app.route('/')
def home():
    return "Welcome to the Dobu Martial Arts API!"
@app.route('/login',methods=["POST"])
def login():
    return
@app.route('/signup',methods=["POST"])
def sign_up():
    return
if __name__ == "__main__":
    app.run(debug=True)