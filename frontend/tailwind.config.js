// Here is the Tailwinds setup Here we have a theme, plugins and what contents to apply these settings on
// Later we can add more themes such as a dark theme, but that is an alternative
/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: true,
    darkTheme: "light",
    themes: [
      {
        light: {
          "primary": "#ffffff",    // Primary color
          "secondary": "#868686",  // Secondary color
          "accent": "#494949",     // Accent color
          "neutral": "#131313",    // Neutral color
          "base-100": "#1c1c1c",   // Base color
          "info": "#ffffff",       // Information color
          "success": "#1DB98A",    // Success color
          "warning": "#FAB561",    // Warning color
          "error": "#EB3A2D",      // Error color
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}