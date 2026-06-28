import React from "react";
import ConfidenceBar from "./ConfidenceBar";
import DiseaseInfo from "./DiseaseInfo";
import { DISEASES } from "../data/diseases";

const severityStyles = {
  red: {
    badge: "bg-red-100 text-red-disease",
    title: "text-red-disease",
  },
  yellow: {
    badge: "bg-yellow-100 text-yellow-warn",
    title: "text-yellow-warn",
  },
  green: {
    badge: "bg-green-100 text-green-600",
    title: "text-green-600",
  },
};

export default function ResultCard({ result, imagePreview, onReset }) {
  const diseaseName = result?.class;
  const confidence = result?.confidence ?? 0;
  const disease = DISEASES[diseaseName];
  const styles = severityStyles[disease?.severityColor] || severityStyles.green;

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-up">
      {/* Left — Image Preview */}
      <div className="md:col-span-5 relative overflow-hidden rounded-2xl shadow-xl aspect-square">
        <div className="scanning-line" />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Uploaded leaf"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute bottom-4 left-4 z-20 bg-primary/90 backdrop-blur-sm text-cream px-4 py-2 rounded-full flex items-center gap-2 text-sm font-body">
          <span>🔬</span>
          <span>AI Analysis Complete</span>
        </div>
      </div>

      {/* Right — Result Details */}
      <div className="md:col-span-7 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/10 p-6 space-y-5 animate-slide-right">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <span className={`text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${styles.badge}`}>
              {disease?.severity} Severity
            </span>
            <h3 className={`font-display text-4xl font-bold mt-2 leading-tight ${styles.title}`}>
              {diseaseName}
            </h3>
          </div>
          {/* Reset button */}
          <button
            onClick={onReset}
            className="p-2 rounded-xl border border-primary/20 hover:bg-primary/5 transition-colors text-primary/50 hover:text-primary"
            title="Scan another leaf"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Confidence Bar */}
        <ConfidenceBar
          confidence={confidence}
          diseaseColor={disease?.severityColor}
        />

        {/* Disease Info */}
        <DiseaseInfo disease={disease} />
      </div>
    </div>
  );
}
