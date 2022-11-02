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
				"white-100": "rgba(255, 255, 255, 0.1)"
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
