/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				red: "#D04164",
				DarkRed: "#2D2023",
				white: "#FFFFFF",
				primary: "#F0E7DB",
				secondary: "#F4EDE4",
				text: "#0F1111",
				subText: "#1F201F"
			},
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
			}
		},
	},
	plugins: [],
};
