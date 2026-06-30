from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uuid

# Initialize FastAPI
app = FastAPI(title="गप्पा (Gappa) Backend API", version="1.0")

# Setup CORS so your React Native app can talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models (Data Validation) ---
class UserRegisterRequest(BaseModel):
    username: str
    phone: str
    public_key: str

# --- Temporary In-Memory Database (Until we connect PostgreSQL) ---
# We use a simple dictionary to test the logic first
fake_db = {}

# --- API Endpoints ---
@app.get("/")
def read_root():
    return {"message": "Welcome to the गप्पा (Gappa) E2EE Backend API!"}

@app.post("/register")
def register_user(user: UserRegisterRequest):
    # Check if user already exists (by phone)
    for existing_user in fake_db.values():
        if existing_user["phone"] == user.phone:
            raise HTTPException(status_code=400, detail="Phone number already registered")
    
    # Generate a unique User ID
    user_id = str(uuid.uuid4())
    
    # Save to our "database"
    new_user = {
        "id": user_id,
        "username": user.username,
        "phone": user.phone,
        "public_key": user.public_key,
        "status": "Online"
    }
    fake_db[user_id] = new_user
    
    return {
        "message": "User registered successfully for E2EE",
        "user_id": user_id,
        "username": new_user["username"]
    }

@app.get("/users")
def get_all_users():
    """Endpoint for testing: See who is registered and grab their public keys"""
    return fake_db