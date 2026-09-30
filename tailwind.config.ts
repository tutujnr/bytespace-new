import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand: "#0836FF", brand2: "#0033FF", lime: "#D2FF4D", lime2: "#D9FF66",
      ink: "#0A0A0A", mute: "#6B7280", soft: "#F8F9FF", soft2: "#F0F2FF", periwinkle: "#8EA0FF" },
    fontFamily: { sans: ["Satoshi", "Inter", "system-ui", "sans-serif"] },
    borderRadius: { card: "16px" },
  } },
  plugins: [],
} satisfies Config;
