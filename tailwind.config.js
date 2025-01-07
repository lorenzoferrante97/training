/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    // --- FONT ---

    fontFamily: {
      'custom': ['Urbanist', 'sans-serif'],
    },

    // --- BORDER RADIUS ---

    borderRadius: {
      'none': '0',
      'sm': '0.25rem',
      DEFAULT: '0.5rem',
      'md': '1rem',
      'lg': '2rem',
      'xl': '4rem',
      'full': '9999px',
    },

    extend: {},
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],

  // FlyonUI config (optional - here are the default values)
  flyonui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "soft"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: false, // include FlyonUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    vendors: false, // default is false when true add customize css for apexChart, editor.js, flatpickr, fullcalendar, notyf, raty-js
    logs: true, // Shows info about FlyonUI version and used config in the console when building your CSS
    themeRoot: ":root" // The element that receives theme color CSS variables
  }
}
