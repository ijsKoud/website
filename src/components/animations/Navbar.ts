import type { Variants } from "framer-motion";

export const NavbarTitleAnimations: Variants = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.6, 0, 0.17, 1]
		}
	}
};

export const NavbarItemAnimations = (index: number): Variants => ({
	initial: {
		opacity: 0,
		marginTop: "-1rem"
	},
	animate: {
		opacity: 1,
		marginTop: "0rem",
		transition: {
			duration: 0.7,
			delay: index * 0.2 + 0.5,
			ease: [0.6, 0, 0.17, 1]
		}
	}
});
