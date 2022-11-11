import type { Variants } from "framer-motion";

export const LandingDivAnimations: Variants = {
	initial: {
		display: "none"
	},
	animate: {
		display: "flex",
		transition: {
			delay: 1.3
		}
	}
};

export const LandingButtonAnimation: Variants = {
	initial: {
		opacity: 0,
		transform: "translateY(1rem)"
	},
	animate: {
		opacity: 1,
		transform: "translateY(0rem)",
		transition: {
			duration: 0.5,
			delay: 3,
			ease: [0.6, 0, 0.17, 1]
		}
	}
};
