import React, { useRef, useState } from "react";

export default function UploadZone({ onFileSelect, loading }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      onFileSelect(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div
      className={`relative cursor-pointer border-4 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center min-h-[320px] transition-all duration-300
        ${dragging ? "border-green-accent bg-primary/5 scale-[1.01]" : "border-primary/30 bg-white/60"}
        ${loading ? "pointer-events-none opacity-60" : "hover:border-primary/60 hover:bg-primary/5"}
      `}
      onClick={() => !loading && inputRef.current.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {/* Icon */}
      <div className={`w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 transition-transform duration-300 ${dragging ? "scale-110" : ""}`}>
        <svg className="w-10 h-10 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      </div>

      <h3 className="font-display text-2xl text-primary font-bold mb-2 text-center">
        Drop your potato leaf image here
      </h3>
      <p className="font-body text-primary/50 text-sm">
        or click to browse your files
      </p>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream/80 rounded-2xl">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="font-body text-primary font-medium">Analyzing leaf...</p>
          </div>
        </div>
      )}
    </div>
  );
}
