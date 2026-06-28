import React from "react";

export default function DiseaseInfo({ disease }) {
  if (!disease) return null;

  return (
    <div className="space-y-6">
      {/* Description */}
      <div>
        <h4 className="font-display text-lg text-primary font-bold mb-2">
          About this condition
        </h4>
        <p className="font-body text-primary/70 leading-relaxed text-sm">
          {disease.description}
        </p>
      </div>

      {/* Treatment */}
      <div className="bg-primary/5 rounded-xl p-5 border-l-4 border-primary">
        <h4 className="font-body text-xs uppercase tracking-widest text-primary font-semibold mb-3">
          Treatment Protocol
        </h4>
        <ul className="space-y-2">
          {disease.treatment.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-accent mt-0.5 flex-shrink-0">✓</span>
              <span className="font-body text-sm text-primary/80">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prevention */}
      <div className="bg-cream-dark rounded-xl p-5 border-l-4 border-secondary">
        <h4 className="font-body text-xs uppercase tracking-widest text-secondary font-semibold mb-3">
          Prevention Tips
        </h4>
        <ul className="space-y-2">
          {disease.prevention.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-secondary mt-0.5 flex-shrink-0">→</span>
              <span className="font-body text-sm text-primary/80">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
