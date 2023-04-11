import { BackDropVariants } from "@website/constants";
import { motion } from "framer-motion";
import React from "react";

interface Props extends React.PropsWithChildren {
	onClick: () => void;
}

const BackDrop: React.FC<Props> = ({ onClick, children }) => {
	return (
		<motion.div
			className="flex items-center fixed z-40 inset-0 h-full w-full justify-center overflow-y-hidden backdrop-blur-md bg-[rgba(0,0,0,0.7)]"
			onClick={onClick}
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={BackDropVariants}
		>
			{children}
		</motion.div>
	);
};

export default BackDrop;
