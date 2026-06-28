export const DISEASES = {
  "Early Blight": {
    severity: "Medium",
    severityColor: "yellow",
    description:
      "Early blight is caused by the fungus Alternaria solani. It appears as small dark spots with concentric rings forming a target-like pattern on older leaves first.",
    treatment: [
      "Remove and destroy infected leaves immediately",
      "Apply fungicides containing chlorothalonil or mancozeb",
      "Avoid overhead irrigation to reduce leaf wetness",
      "Rotate crops — avoid planting potatoes in the same spot for 2+ years",
    ],
    prevention: [
      "Use certified disease-free seed potatoes",
      "Maintain adequate plant nutrition to reduce stress",
      "Ensure good air circulation between plants",
    ],
  },
  "Late Blight": {
    severity: "High",
    severityColor: "red",
    description:
      "Late blight is caused by Phytophthora infestans — the pathogen behind the Irish Potato Famine. It spreads rapidly in cool, moist conditions and can destroy an entire crop within days.",
    treatment: [
      "Apply fungicides immediately — metalaxyl or cymoxanil based",
      "Remove and bag all infected plant material",
      "Do not compost infected plants",
      "Monitor neighboring fields as spores spread by wind",
    ],
    prevention: [
      "Plant resistant varieties when possible",
      "Apply preventive fungicides during wet, cool weather",
      "Hill soil around plants to protect tubers",
    ],
  },
  Healthy: {
    severity: "None",
    severityColor: "green",
    description:
      "Your potato plant appears healthy! No signs of disease detected. Continue your current care routine and monitor regularly for any changes.",
    treatment: [
      "Continue regular watering and fertilization schedule",
      "Monitor weekly for early signs of pests or disease",
      "Maintain proper plant spacing for air circulation",
    ],
    prevention: [
      "Keep a strict crop rotation schedule",
      "Use certified seed potatoes each season",
      "Test soil annually and amend nutrients as needed",
    ],
  },
};
