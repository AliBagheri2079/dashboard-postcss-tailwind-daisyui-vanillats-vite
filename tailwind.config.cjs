/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ["light", "dark", "bumblebee", "halloween", "emerald", "forest"],
    base: false,
    utils: true,
    logs: true,
    // rtl: false,
    // prefix: "daisy-",
    // darkTheme: "dark",
  },
};
