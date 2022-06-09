import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import type { FC } from "../../lib/types";

const variants: Variants = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1]
		}
	},
	exit: {
		opacity: 0,
		transform: "translateX(1rem)",
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1]
		}
	}
};

const PageTransition: FC = ({ children }) => {
	const { route } = useRouter();

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div key={route} variants={variants} initial="initial" animate="animate" exit="exit">
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
