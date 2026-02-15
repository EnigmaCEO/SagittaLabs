import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05060F",
        nebula: "#0A0F2D",
        electric: "#4F68FF",
        cyanflare: "#1BC8FF",
        card: "#081226"
      },
      boxShadow: {
        glow: "0 0 50px rgba(79, 104, 255, 0.35)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 75% 20%, rgba(86,109,255,0.35), transparent 32%), radial-gradient(circle at 15% 85%, rgba(27,200,255,0.12), transparent 36%)"
      }
    }
  },
  plugins: []
};

export default config;

