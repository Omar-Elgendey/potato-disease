import React, { useEffect, useState } from "react";

export default function ConfidenceBar({ confidence, diseaseColor }) {
  const [width, setWidth] = useState(0);
  const percent = Math.round(confidence * 100);

  const colorMap = {
    red: "bg-red-disease",
    yellow: "bg-yellow-warn",
    green: "bg-green-accent",
  };

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percent), 100);
    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-primary/60 uppercase tracking-wider">
          AI Confidence
        </span>
        <span className="font-mono text-2xl font-bold text-primary">
          {percent}%
        </span>
      </div>
      <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-[1200ms] ease-out ${colorMap[diseaseColor] || "bg-green-accent"}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
