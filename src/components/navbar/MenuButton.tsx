import React from "react";
import { motion } from "framer-motion";
import { NavbarItemAnimations } from "../animations/Navbar";

interface Props {
	menu: boolean;
	toggleMenu: () => void;
}

const MenuButton: React.FC<Props> = ({ menu, toggleMenu }) => {
	return (
		<motion.button
			variants={NavbarItemAnimations(5)}
			initial="initial"
			animate="animate"
			className="text-lg font-semibold hover:text-primary transition-colors flex"
			onClick={toggleMenu}
		>
			<p>·</p>
			<p className={`transform ${menu ? "translate-y-1" : "translate-y-0"} transition-transform`}>·</p>
			<p>·</p>
		</motion.button>
	);
};

export default MenuButton;
