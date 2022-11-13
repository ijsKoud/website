import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import ThemeButton from "./ThemeButton";
import { motion } from "framer-motion";
import { NavbarItemAnimations, NavbarTitleAnimations } from "../animations/Navbar";

const Navbar = () => {
	const navItemClassName = "text-base font-semibold hover:text-primary transition-colors cursor-pointer";
	const scrollTop = () => {
		const el = document.getElementById("content");
		el?.scrollTo({ top: 0 });
	};

	return (
		<div className="px-12 max-md:px-8 h-[70px] w-screen fixed z-[9999] flex justify-between items-center">
			<Link href="/" legacyBehavior>
				<motion.a
					variants={NavbarTitleAnimations}
					initial="initial"
					animate="animate"
					onClick={scrollTop}
					className="text-xl font-extrabold w-fit hover:text-primary transition-colors cursor-pointer"
				>
					ijsKoud
				</motion.a>
			</Link>
			<div className="flex justify-center gap-12 items-center max-md:gap-8">
				<div className="flex justify-between gap-12 items-center max-md:hidden">
					<Link legacyBehavior href="/#about">
						<motion.a variants={NavbarItemAnimations(0)} initial="initial" animate="animate" className={navItemClassName}>
							About
						</motion.a>
					</Link>
					<Link legacyBehavior href="/#projects">
						<motion.a variants={NavbarItemAnimations(1)} initial="initial" animate="animate" className={navItemClassName}>
							Projects
						</motion.a>
					</Link>
					<Link legacyBehavior href="/#contact">
						<motion.a variants={NavbarItemAnimations(2)} initial="initial" animate="animate" className={navItemClassName}>
							Contact
						</motion.a>
					</Link>
				</div>
				<ThemeButton />
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;
