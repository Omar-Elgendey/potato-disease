import React, { useState } from "react";
import Header from "./components/Header";
import UploadZone from "./components/UploadZone";
import ResultCard from "./components/ResultCard";
import { usePredict } from "./hooks/usePredict";

export default function App() {
  const { predict, result, loading, error, reset } = usePredict();
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileSelect = async (file) => {
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    await predict(file);
  };

  const handleReset = () => {
    reset();
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen leaf-bg">
      <Header />

      <main className="pt-28 pb-20 flex flex-col items-center px-4 md:px-8">
        {/* Hero */}
        {!result && !loading && (
          <section className="text-center mb-10 max-w-2xl animate-fade-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">
              Protect Your Harvest with AI
            </h2>
            <p className="font-body text-primary/60 text-lg">
              Instant diagnosis of potato leaf health using advanced machine
              learning for professional farming results.
            </p>
          </section>
        )}

        {/* Upload or Result */}
        <div className="w-full max-w-4xl">
          {!result ? (
            <UploadZone onFileSelect={handleFileSelect} loading={loading} />
          ) : (
            <ResultCard
              result={result}
              imagePreview={imagePreview}
              onReset={handleReset}
            />
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 max-w-lg w-full bg-red-50 border border-red-disease/30 rounded-xl p-4 flex items-start gap-3">
            <span className="text-red-disease text-xl">⚠️</span>
            <div>
              <p className="font-body font-semibold text-red-disease text-sm">
                Connection Error
              </p>
              <p className="font-body text-red-disease/70 text-sm mt-1">
                {error}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
