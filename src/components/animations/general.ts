import type { Variants } from "framer-motion";

export const FadeInAnimation: Variants = {
	initial: {
		opacity: 0,
		transform: "translateY(1rem)"
	},
	inView: {
		opacity: 1,
		transform: "translateY(0rem)",
		transition: {
			duration: 0.5,
			ease: [0.6, 0, 0.17, 1]
		}
	}
};
