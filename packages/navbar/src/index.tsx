import Link from "next/link";
import React from "react";
import Menu from "./NavMenu";
import { motion } from "framer-motion";
import { navbarTitleAnimations, NAVBAR_NAV_LINKS, NAVBAR_LOGO_TEXT } from "@website/constants";
import { NavLink } from "./buttons";
import { Inter } from "next/font/google";

const inter = Inter({ display: "swap", subsets: ["latin"] });

const Navbar: React.FC = () => {
	const scrollTop = () => {
		const el = document.getElementById("__next");
		el?.scrollTo({ top: 0 });
	};

	return (
		<nav className="px-12 max-md:px-8 h-[70px] w-screen fixed z-[9999] flex justify-between items-center backdrop-blur-md bg-gradient-to-br dark:from-background-400 dark:to-background-200 from-white-400 to-white-200">
			<Link href="/" legacyBehavior>
				<motion.a
					variants={navbarTitleAnimations}
					initial="initial"
					animate="animate"
					onClick={scrollTop}
					style={inter.style}
					className="text-11 font-extrabold w-fit hover:text-primary transition-colors cursor-pointer"
				>
					{NAVBAR_LOGO_TEXT}
				</motion.a>
			</Link>
			<div className="flex justify-center gap-16 items-center max-md:gap-8">
				<div className="flex justify-between gap-16 items-center max-lg:hidden">
					{NAVBAR_NAV_LINKS.map((link) => (
						<NavLink key={link.index} {...link} />
					))}
				</div>
				<Menu />
			</div>
		</nav>
	);
};

export default Navbar;
