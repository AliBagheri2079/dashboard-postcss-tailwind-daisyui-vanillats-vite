/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			gridTemplateColumns: {
				// Complex site-specific column configuration
				layout: "repeat(auto-fit, minmax(min(20vw, 200px), 1fr))",
				layout_2: "3.5rem 1fr auto",
			},
			gridTemplateRows: {
				// Complex site-specific row configuration
				layout: "minmax(50px, 10vh) repeat(2, minmax(150px, 1fr))",
			},
		},
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
