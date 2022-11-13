import { motion, Variants } from "framer-motion";
import React from "react";

const variants: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1]
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1]
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: [0.4, 0, 0.2, 1]
		}
	}
};

const BackDrop: React.FC<React.PropsWithChildren<{ onClick: () => void }>> = ({ onClick, children }) => {
	return (
		<motion.div
			className="flex items-center fixed z-40 inset-0 h-full w-full justify-center overflow-y-hidden backdrop-blur-md bg-[rgba(0,0,0,0.7)]"
			onClick={onClick}
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

export default BackDrop;
