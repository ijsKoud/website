import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MenuButton, NavMenuLink } from "./buttons";

const Menu: React.FC = () => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);
	const closeMenu = () => setMenu(false);

	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		closeMenu();
	};

	useEffect(() => setIsDark(theme === "dark"), [theme]);

	const opacity = menu ? "opacity-100" : "opacity-0";

	const NAV_MENU_LINKS = [
		{
			title: isDark ? "Dark Mode" : "Light Mode",
			emoji: isDark ? "🌑" : "🔆",
			onClick: toggleTheme
		},
		{
			title: "Projects",
			emoji: "📂",
			href: "/projects",
			onClick: closeMenu
		},
		{
			title: "Anime",
			emoji: "📼",
			href: "/anime",
			onClick: closeMenu
		},
		{
			title: "Guestbook",
			emoji: "📖",
			href: "/guestbook",
			onClick: closeMenu
		}
	] as const;

	return (
		<nav aria-aria-hidden={!menu}>
			<MenuButton menu={menu} toggleMenu={toggleMenu} />
			<ul
				className={`bg-white dark:bg-background-alt rounded-md absolute translate-y-4 right-12 max-md:right-8 py-2 px-4 border-light-gray dark:border-background border-2 ${opacity} ${
					menu ? "pointer-events-auto" : "pointer-events-none"
				} transition-opacity`}
			>
				{NAV_MENU_LINKS.map((link, key) => (
					<NavMenuLink key={key} {...link} />
				))}
			</ul>
		</nav>
	);
};

export default Menu;
