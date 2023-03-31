export const NAV_LINKS = [
	{
		title: "About",
		href: "/#about",
		index: 0
	},
	{
		title: "Featured projects",
		href: "/#projects",
		index: 1
	},
	{
		title: "Contact",
		href: "/#contact",
		index: 2
	}
] as const;

interface GetNavMenuConstantsProps {
	closeMenu: () => void;
	toggleTheme: () => void;
	isDark: boolean;
}

export const getNavMenuConstants = ({ closeMenu, isDark, toggleTheme }: GetNavMenuConstantsProps) => {
	const THEME_TOGGLE = {
		title: isDark ? "Dark Mode" : "Light Mode",
		emoji: isDark ? "🌑" : "🔆",
		onClick: toggleTheme
	} as const;

	const NAV_MENU_LINKS = [
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

	const NAV_MENU_LINKS_DESKTOP = [THEME_TOGGLE, ...NAV_MENU_LINKS] as const;

	const NAV_MENU_LINKS_MOBILE = [
		THEME_TOGGLE,
		{
			title: "About",
			emoji: "👋",
			href: "/#about",
			onClick: closeMenu
		},
		{
			title: "Contact",
			emoji: "✉️",
			href: "/#contact",
			onClick: closeMenu
		},
		...NAV_MENU_LINKS
	] as const;

	return {
		mobile: NAV_MENU_LINKS_MOBILE,
		desktop: NAV_MENU_LINKS_DESKTOP,
		themeToggle: THEME_TOGGLE
	};
};
