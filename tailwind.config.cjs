/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				ss: "460px",
				sm: "480px",
				md: "768px",
				lg: "916px",
				xl: "1440px",
			},
			colors: {
				red: "#D04164",
				DarkRed: "#2D2023",
				lightSkill: "#6B6761",
				white: "#FFFFFF",
				primary: "#F0E7DB",
				secondary: "#F4EDE4",
				text: "#0F1111",
				subText: "#1F201F",
				darkPrimary: "#202023",
				darkSecondary: "#29292D",
			},
			fontFamily: {
				nunito: ["'Nunito'", "sans-serif"],
				MPlus: ["'M PLUS Rounded 1c'", "sans-serif"]
			}
		},
	},
	plugins: [],
};
