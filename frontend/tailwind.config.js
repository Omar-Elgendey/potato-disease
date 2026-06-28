module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B4332",
        "primary-light": "#2D6A4F",
        "primary-dark": "#081C15",
        secondary: "#6B4226",
        cream: "#F5F0E8",
        "cream-dark": "#EDE8E0",
        "green-accent": "#52B788",
        "red-disease": "#BA1A1A",
        "yellow-warn": "#B7791F",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        scan: "scan 2.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-right": "slideRight 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        scan: {
          "0%, 100%": { top: "0%" },
          "50%": { top: "100%" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(16px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRight: {
          from: { opacity: 0, transform: "translateX(40px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
