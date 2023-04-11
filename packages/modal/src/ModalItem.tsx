import { motion } from "framer-motion";
import React from "react";
import BackDrop from "./BackDrop";
import { ModalItemVariants } from "@website/constants";

interface Props {
	onClick: () => void;
}

const ModalItem: React.FC<React.PropsWithChildren<Props>> = ({ children, onClick }) => {
	return (
		<BackDrop onClick={onClick}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="relative bg-white dark:bg-background-alt border-light-gray dark:border-black rounded-xl border-2 px-4 py-2 mx-4 my-4"
				variants={ModalItemVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<div>{children}</div>
				<button
					aria-label="Close the modal"
					onClick={onClick}
					className="absolute right-4 top-3 text-center text-5 hover:text-primary transition-colors"
				>
					<i className="fa-solid fa-times" />
				</button>
			</motion.div>
		</BackDrop>
	);
};

export default ModalItem;
