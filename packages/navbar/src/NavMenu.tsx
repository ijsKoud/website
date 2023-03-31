import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MenuButton, NavMenuLink } from "./buttons";
import { getNavMenuConstants } from "./constants/Navbar";

const Menu: React.FC = () => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);
	const closeMenu = () => setMenu(false);

	const opacity = menu ? "opacity-100" : "opacity-0";

	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	useEffect(() => setIsDark(theme === "dark"), [theme]);
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		closeMenu();
	};

	const navMenuConstants = getNavMenuConstants({ closeMenu, toggleTheme, isDark });

	return (
		<nav>
			<MenuButton menu={menu} toggleMenu={toggleMenu} />
			<ul
				aria-hidden={!menu}
				className={`max-lg:hidden bg-white dark:bg-background-alt rounded-md absolute translate-y-4 right-12 max-md:right-8 py-2 px-4 border-light-gray dark:border-background border-2 ${opacity} ${
					menu ? "pointer-events-auto" : "pointer-events-none"
				} transition-opacity`}
			>
				{navMenuConstants.desktop.map((link, key) => (
					<NavMenuLink key={key} {...link} />
				))}
			</ul>
			<ul
				aria-hidden={!menu}
				className={`lg:hidden max-lg:block bg-white dark:bg-background-alt rounded-md absolute translate-y-4 right-12 max-md:right-8 py-2 px-4 border-light-gray dark:border-background border-2 ${opacity} ${
					menu ? "pointer-events-auto" : "pointer-events-none"
				} transition-opacity`}
			>
				{navMenuConstants.mobile.map((link, key) => (
					<NavMenuLink key={key} {...link} />
				))}
			</ul>
		</nav>
	);
};

export default Menu;
