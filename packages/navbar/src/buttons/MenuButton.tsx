import React from "react";
import { motion } from "framer-motion";
import { navbarItemAnimations } from "../constants/animations";

interface Props {
	menu: boolean;
	toggleMenu: () => void;
}

export const MenuButton: React.FC<Props> = ({ menu, toggleMenu }) => {
	return (
		<motion.button
			variants={navbarItemAnimations(3)}
			initial="initial"
			animate="animate"
			className="text-6 font-semibold hover:text-primary transition-colors flex items-center gap-1"
			onClick={toggleMenu}
		>
			<p className={`text-6 transform ${menu ? "-translate-y-[2px]" : "translate-y-0"} transition-transform`}>·</p>
			<p className={`text-6 transform ${menu ? "translate-y-1" : "translate-y-0"} transition-transform`}>·</p>
			<p className={`text-6 transform ${menu ? "-translate-y-[2px]" : "translate-y-0"} transition-transform`}>·</p>
		</motion.button>
	);
};
