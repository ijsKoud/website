import Link from "next/link";
import React from "react";
import Menu from "./NavMenu";
import { motion } from "framer-motion";
import { NavbarTitleAnimations } from "./constants/animations";
import { NAV_LINKS } from "./constants/Navbar";
import { NavLink } from "./buttons";

const Navbar: React.FC = () => {
	const scrollTop = () => {
		const el = document.getElementById("__next");
		el?.scrollTo({ top: 0 });
	};

	return (
		<>
			<nav className="px-12 max-md:px-8 h-[70px] w-screen fixed z-[9999] flex justify-between items-center">
				<Link href="/" legacyBehavior>
					<motion.a
						variants={NavbarTitleAnimations}
						initial="initial"
						animate="animate"
						onClick={scrollTop}
						className="text-8 font-extrabold w-fit hover:text-primary transition-colors cursor-pointer"
					>
						ijsKoud
					</motion.a>
				</Link>
				<div className="flex justify-center gap-16 items-center max-md:gap-8">
					<div className="flex justify-between gap-16 items-center max-lg:hidden">
						{NAV_LINKS.map((link) => (
							<NavLink key={link.index} {...link} />
						))}
					</div>
					<Menu />
				</div>
			</nav>
			<nav aria-disabled className="w-screen h-[70px]" />
		</>
	);
};

export default Navbar;
