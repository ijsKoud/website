import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import type { FC } from "../../lib/types";

const PageTransition: FC = ({ children }) => {
	const { route } = useRouter();

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				key={route}
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						duration: 0.5,
						ease: [0.6, -0.05, 0.01, 0.99]
					}
				}}
				exit={{ opacity: 0 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
