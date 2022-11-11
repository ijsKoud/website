import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { NavbarItemAnimations } from "../animations/Navbar";
import { motion } from "framer-motion";

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
	useEffect(() => setIsDark(theme === "dark"), [theme]);

	return (
		<motion.button variants={NavbarItemAnimations(4)} initial="initial" animate="animate" onClick={toggleTheme}>
			<i className={`text-base font-semibold fa-regular ${isDark ? "fa-sun" : "fa-moon"} hover:text-primary transition-colors`} />
		</motion.button>
	);
};

export default ThemeButton;
