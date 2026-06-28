from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import requests
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TF_SERVING_URL = os.getenv(
    "TF_SERVING_URL",
    "http://localhost:8501/v1/models/potato_disease:predict"
)

CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]

IMAGE_SIZE = 224  

@app.get("/ping")
async def ping():
    return {"message": "Hello"}

def read_file_as_image(data):
    image = Image.open(BytesIO(data)).convert("RGB")
    image = image.resize((IMAGE_SIZE, IMAGE_SIZE))
    
    
    image = np.array(image).astype("float32")
    return image

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_data = await file.read()
    image = read_file_as_image(image_data)
    img_batch = np.expand_dims(image, 0)

    payload = {"instances": img_batch.tolist()}
    response = requests.post(TF_SERVING_URL, json=payload)
    predictions = response.json()["predictions"][0]

    predicted_class = CLASS_NAMES[np.argmax(predictions)]
    confidence = float(np.max(predictions))

    return {"class": predicted_class, "confidence": confidence}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)