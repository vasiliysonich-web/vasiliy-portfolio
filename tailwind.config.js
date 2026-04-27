/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-purple": "#a855f7",
        "neon-pink": "#ff0099",
        "neon-cyan": "#00d4ff",
        "neon-blue": "#0066ff",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        "neon-purple/30": "rgba(168, 85, 247, 0.3)",
      }),
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { textShadow: "0 0 20px rgba(168, 85, 247, 0.5)" },
          "50%": { textShadow: "0 0 40px rgba(168, 85, 247, 0.8)" },
        },
        "glow-pink": {
          "0%, 100%": { textShadow: "0 0 20px rgba(255, 0, 153, 0.5)" },
          "50%": { textShadow: "0 0 40px rgba(255, 0, 153, 0.8)" },
        },
        "glow-cyan": {
          "0%, 100%": { textShadow: "0 0 20px rgba(0, 212, 255, 0.5)" },
          "50%": { textShadow: "0 0 40px rgba(0, 212, 255, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "glow-pink": "glow-pink 2s ease-in-out infinite",
        "glow-cyan": "glow-cyan 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "slide-in": "slide-in 0.6s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      boxShadow: {
        "glow-purple":
          "0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)",
        "glow-pink":
          "0 0 30px rgba(255, 0, 153, 0.6), 0 0 60px rgba(255, 0, 153, 0.3)",
        "glow-cyan":
          "0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
