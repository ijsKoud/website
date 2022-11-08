/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito", "sans-serif"]
			},
			fontSize: {
				sm: ["16.80px"],
				base: ["21px"],
				lg: ["26.25px"],
				xl: ["32.81px"],
				"2xl": ["41.02px"],
				"3xl": ["51.27px"],
				"4xl": ["64.09px"]
			},
			backdropBlur: {
				"bg-dark": "175px",
				"bg-light": "175px"
			},
			borderColor: {
				background: "#272728"
			},
			colors: {
				primary: "#4E9ED7",
				"primary-900": "rgba(78, 158, 215, 0.9)",
				"primary-800": "rgba(78, 158, 215, 0.8)",
				"primary-700": "rgba(78, 158, 215, 0.7)",
				"primary-600": "rgba(78, 158, 215, 0.6)",
				"primary-500": "rgba(78, 158, 215, 0.5)",
				"primary-400": "rgba(78, 158, 215, 0.4)",
				"primary-300": "rgba(78, 158, 215, 0.3)",
				"primary-200": "rgba(78, 158, 215, 0.2)",
				"primary-100": "rgba(78, 158, 215, 0.1)",
				secondary: "#62ADE3",
				tertairy: "#2B91D9",
				"light-gray": "#AFAFAF",
				"dark-gray": "#151516",
				background: "#131313",
				"background-alt": "#191919",
				"background-900": "rgba(19, 19, 19, 0.9)",
				"background-800": "rgba(19, 19, 19, 0.8)",
				"background-700": "rgba(19, 19, 19, 0.7)",
				"background-600": "rgba(19, 19, 19, 0.6)",
				"background-500": "rgba(19, 19, 19, 0.5)",
				"background-400": "rgba(19, 19, 19, 0.4)",
				"background-300": "rgba(19, 19, 19, 0.3)",
				"background-200": "rgba(19, 19, 19, 0.2)",
				"background-100": "rgba(19, 19, 19, 0.1)",
				"white-900": "rgba(255, 255, 255, 0.9)",
				"white-800": "rgba(255, 255, 255, 0.8)",
				"white-700": "rgba(255, 255, 255, 0.7)",
				"white-600": "rgba(255, 255, 255, 0.6)",
				"white-500": "rgba(255, 255, 255, 0.5)",
				"white-400": "rgba(255, 255, 255, 0.4)",
				"white-300": "rgba(255, 255, 255, 0.3)",
				"white-200": "rgba(255, 255, 255, 0.2)",
				"white-100": "rgba(255, 255, 255, 0.1)",
				black: "#222222",
				"black-900": "rgba(34, 34, 34, 0.9)",
				"black-800": "rgba(34, 34, 34, 0.8)",
				"black-700": "rgba(34, 34, 34, 0.7)",
				"black-600": "rgba(34, 34, 34, 0.6)",
				"black-500": "rgba(34, 34, 34, 0.5)",
				"black-400": "rgba(34, 34, 34, 0.4)",
				"black-300": "rgba(34, 34, 34, 0.3)",
				"black-200": "rgba(34, 34, 34, 0.2)",
				"black-100": "rgba(34, 34, 34, 0.1)"
			},
			keyframes: {
				"bg-move-down": {
					"0%, 100%": { transform: "translateY(0%)" },
					"50%": { transform: "translateY(25%)" }
				},
				"bg-move-up": {
					"0%, 100%": { transform: "translateY(0%)" },
					"50%": { transform: "translateY(-25%)" }
				}
			},
			animation: {
				"bg-move-down": "bg-move-down 15s ease-in-out infinite",
				"bg-move-up": "bg-move-up 15s ease-in-out infinite"
			}
		}
	},
	plugins: []
};
