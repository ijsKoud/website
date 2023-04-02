export * from "./animations";

import type { GetNavMenuConstantsProps } from "./types";

export const NAVBAR_LOGO_TEXT = "D" as const;

/**
 * ONLY MODIFY THE CONSTANTS ITSELF, DO NOT RENAME THIS ITEM
 * DO NOT REMOVE OR RENAME THE `index: number` PROP ON EVERY LINK, ALWAYS ADD IT TO THE OBJECT IF YOU ADD/MODIFY ANY OF THEM
 * MAKE SURE TO INCREMENT THE NUMBER EVERY TIME YOU ADD A NEW ITEM!
 */
export const NAVBAR_NAV_LINKS = [
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

/**
 * ONLY MODIFY THE CONSTANTS ITSELF, DO NOT RENAME THIS FUNCTION OR CHANGE THE PROP NAMES
 * DO NOT REMOVE OR RENAME THE `onClick: *` PROP ON EVERY LINK, ALWAYS ADD IT TO THE OBJECT IF YOU ADD/MODIFY ANY OF THEM
 */
export const getNavMenuConstants = ({ closeMenu, isDark, toggleTheme }: GetNavMenuConstantsProps) => {
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

	const NAV_MENU_LINKS_MOBILE = [
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
		}
	] as const;

	/** DO NOT RENAME OR MODIFY THIS ITEM! */
	const THEME_TOGGLE = {
		title: isDark ? "Dark Mode" : "Light Mode",
		emoji: isDark ? "🌑" : "🔆",
		onClick: toggleTheme
	} as const;

	return {
		mobile: [THEME_TOGGLE, ...NAV_MENU_LINKS_MOBILE, ...NAV_MENU_LINKS],
		desktop: [THEME_TOGGLE, ...NAV_MENU_LINKS],
		themeToggle: THEME_TOGGLE
	};
};
