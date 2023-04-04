import type { Variants } from "framer-motion";
import { TRANSITION_EASINGS } from "../Animations";

/** DO NOT RENAME THIS CONSTANT, ONLY CHANGE THE VALUES IF YOU KNOW WHAT YOU ARE DOING */
export const navbarTitleAnimations: Variants = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: TRANSITION_EASINGS.easeOut
		}
	}
};

/** DO NOT RENAME THIS FUNCTION OR CHANGE THE FUNCTION PARAMS, ONLY CHANGE THE VALUES IF YOU KNOW WHAT YOU ARE DOING */
export const navbarItemAnimations = (index: number): Variants => ({
	initial: {
		opacity: 0,
		transform: "translateY(-8px)"
	},
	animate: {
		opacity: 1,
		transform: "translateY(0px)",
		transition: {
			duration: 0.3,
			delay: index * 0.1,
			ease: TRANSITION_EASINGS.easeOut
		}
	}
});
