
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Old theme - keep for reference or remove later
        // croissant: {
        //   light: "#F2D2A9",
        //   DEFAULT: "#E8B87D",
        //   dark: "#D49C51",
        // },
        // cream: {
        //   DEFAULT: "#FEF9F1",
        //   dark: "#F9F1E7",
        // },
        // New Logo Theme
        'logo-blue': {
          light: "#EBF5FF", // A very light blue for backgrounds if needed
          DEFAULT: "#3da8ff", // Primary blue from user suggestion/logo
          dark: "#298EE0", // Darker shade for hover
        },
        navy: { // Keep navy for text
          DEFAULT: "#1A2A40",
          light: "#2C3E50",
        },
        // Re-map old theme names to new logo theme
        croissant: { // Re-map croissant to logo-blue
          light: "#EBF5FF", // Use the light blue
          DEFAULT: "#3da8ff", // Use logo blue
          dark: "#298EE0", // Use darker logo blue for hover
        },
        cream: { // Re-map cream to white/light-grey
          DEFAULT: "#FFFFFF", // Use white as primary light background
          dark: "#F8F9FA",    // Use light grey as secondary light background
        },
        primary: {
          DEFAULT: "#3da8ff", // Map primary to logo-blue
          foreground: "hsl(var(--primary-foreground))", // Keep HSL for foreground, likely white
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config;
