module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.vue"],
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					black: "#161616",
					yellow: "#CDC152",
				},
			},
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
