import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
	useEffect(() => setIsDark(theme === "dark"), [theme]);

	return (
		<button onClick={toggleTheme}>
			<i className={`text-base font-semibold fa-regular ${isDark ? "fa-sun" : "fa-moon"} hover:text-primary transition-colors`} />
		</button>
	);
};

export default ThemeButton;
