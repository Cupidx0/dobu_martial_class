import os

import requests
from flask import Flask, jsonify, request
from flask_cors import CORS

try:
    import firebase_admin
    from firebase_admin import credentials, firestore
except ImportError:  # pragma: no cover - handled by requirements in runtime
    firebase_admin = None
    credentials = None
    firestore = None


app = Flask(__name__)


def _allowed_origins():
    configured = os.getenv("FRONTEND_ORIGINS", "")
    defaults = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://dobu-martial-class-ln7q.vercel.app",
    ]
    extra = [origin.strip() for origin in configured.split(",") if origin.strip()]
    return defaults + extra


CORS(app, origins=_allowed_origins())

FIREBASE_WEB_API_KEY = os.getenv("FIREBASE_WEB_API_KEY","AIzaSyB43w3smV-qtgYEHC_TQEWRwkmgU7A7jeM")
FIREBASE_SIGNUP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp"
FIREBASE_LOGIN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword"
FIREBASE_CREDENTIALS_PATH = os.getenv(
    "GOOGLE_APPLICATION_CREDENTIALS",
    os.path.join(os.path.dirname(__file__), "credentials.json"),
)


def _initialize_firestore():
    if firebase_admin is None or credentials is None or firestore is None:
        return None

    if not os.path.exists(FIREBASE_CREDENTIALS_PATH):
        return None

    if not firebase_admin._apps:
        firebase_admin.initialize_app(credentials.Certificate(FIREBASE_CREDENTIALS_PATH))

    return firestore.client()


db = _initialize_firestore()


def _firebase_auth_request(url, email, password):
    if not FIREBASE_WEB_API_KEY:
        return None, ("FIREBASE_WEB_API_KEY is not configured on the backend.", 500)

    response = requests.post(
        f"{url}?key={FIREBASE_WEB_API_KEY}||{'AIzaSyB43w3smV-qtgYEHC_TQEWRwkmgU7A7jeM'}",
        json={
            "email": email,
            "password": password,
            "returnSecureToken": True,
        },
        timeout=15,
    )

    payload = response.json()
    if response.ok:
        return payload, None

    error_code = payload.get("error", {}).get("message", "UNKNOWN_ERROR")
    return None, (_firebase_error_message(error_code), 400)


def _firebase_error_message(code):
    messages = {
        "EMAIL_EXISTS": "An account with this email already exists.",
        "EMAIL_NOT_FOUND": "No account was found for this email.",
        "INVALID_PASSWORD": "Incorrect password.",
        "INVALID_LOGIN_CREDENTIALS": "Invalid email or password.",
        "WEAK_PASSWORD : Password should be at least 6 characters": "Password must be at least 6 characters.",
        "WEAK_PASSWORD": "Password must be at least 6 characters.",
        "TOO_MANY_ATTEMPTS_TRY_LATER": "Too many attempts. Please try again later.",
    }
    return messages.get(code, code.replace("_", " ").title())


def _user_response(payload, username=None):
    return {
        "user": {
            "uid": payload.get("localId"),
            "email": payload.get("email"),
            "username": username,
            "idToken": payload.get("idToken"),
            "refreshToken": payload.get("refreshToken"),
        }
    }


@app.route("/")
def home():
    return "Welcome to the Dobu Martial Arts API!"


@app.route("/health")
def health():
    return jsonify({"status": "ok"})


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json(silent=True) or {}
    email = (data.get("email") or "").strip()
    password = data.get("password") or ""

    if not email or not password:
        return jsonify({"error": "Email and password are required."}), 400

    payload, error = _firebase_auth_request(FIREBASE_LOGIN_URL, email, password)
    if error:
        message, status_code = error
        return jsonify({"error": message}), status_code

    username = None
    if db is not None:
        user_doc = db.collection("users").document(payload["localId"]).get()
        if user_doc.exists:
            username = user_doc.to_dict().get("username")

    return jsonify(_user_response(payload, username=username)), 200


@app.route("/signup", methods=["POST"])
def sign_up():
    data = request.get_json(silent=True) or {}
    username = (data.get("username") or "").strip()
    email = (data.get("email") or "").strip()
    password = data.get("password") or ""

    if not username or not email or not password:
        return jsonify({"error": "Username, email, and password are required."}), 400

    payload, error = _firebase_auth_request(FIREBASE_SIGNUP_URL, email, password)
    if error:
        message, status_code = error
        return jsonify({"error": message}), status_code

    if db is not None:
        db.collection("users").document(payload["localId"]).set(
            {
                "username": username,
                "email": email,
            }
        )

    return jsonify(_user_response(payload, username=username)), 201


if __name__ == "__main__":
    app.run(debug=True)
