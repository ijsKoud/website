import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { navbarItemAnimations } from "@website/constants";

interface Props {
	href: string;
	title: string;
	index: number;
}

export const NavLink: React.FC<Props> = ({ index, title, href }) => {
	return (
		<Link legacyBehavior href={href} aria-label={`Go to ${title} section`}>
			<motion.a
				variants={navbarItemAnimations(index)}
				initial="initial"
				animate="animate"
				className="navlink text-5 font-semibold cursor-pointer flex items-center gap-2 relative"
			>
				<p className="text-gray-400">{index + 1}. </p>
				<p>{title}</p>
			</motion.a>
		</Link>
	);
};
