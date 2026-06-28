import { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export function usePredict() {
  const [result, setResult] = useState(null);   // { class, confidence }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const predict = async (file) => {
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${API_URL}/predict`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data); // { class: "Early Blight", confidence: 0.98 }
    } catch (err) {
      setError("Failed to connect to API. Make sure FastAPI is running.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
    setLoading(false);
  };

  return { predict, result, loading, error, reset };
}
