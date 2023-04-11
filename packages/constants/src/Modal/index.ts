import type { Variants } from "framer-motion";
import { TRANSITION_EASINGS } from "../Animations";

const transition = {
	transition: {
		duration: 0.3,
		ease: TRANSITION_EASINGS.easeInOut
	}
} as const;

export const ModalItemVariants: Variants = {
	hidden: {
		scale: 0.8,
		opacity: 0,
		transition
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition
	},
	exit: {
		scale: 0.8,
		opacity: 0,
		transition
	}
};

export const BackDropVariants: Variants = {
	hidden: {
		opacity: 0,
		transition
	},
	visible: {
		opacity: 1,
		transition
	},
	exit: {
		opacity: 0,
		transition
	}
};
