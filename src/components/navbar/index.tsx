import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
	const scrollTop = () => {
		const el = document.getElementById("content");
		el?.scrollTo({ top: 0 });
	};

	return (
		<div className="px-12 max-md:px-8 h-[70px] w-screen fixed z-[9999] flex justify-between items-center">
			<Link href="/" onClick={scrollTop} className="text-xl font-extrabold w-fit hover:text-primary transition-colors">
				ijsKoud
			</Link>
			<div className="flex justify-center gap-12 items-center max-md:gap-8">
				<div className="flex justify-between gap-12 items-center max-md:hidden">
					<Link href="#about" className="text-base font-semibold hover:text-primary transition-colors">
						About
					</Link>
					<Link href="#projects" className="text-base font-semibold hover:text-primary transition-colors">
						Projects
					</Link>
					<Link href="#contact" className="text-base font-semibold hover:text-primary transition-colors">
						Contact
					</Link>
				</div>
				<ThemeButton />
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;
