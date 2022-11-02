import Link from "next/link";
import React from "react";
import MenuButton from "./MenuButton";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
	return (
		<div className="px-12 h-[70px] w-screen fixed z-[9999] flex justify-between items-center">
			<Link href="" className="text-xl font-extrabold w-fit hover:text-primary transition-colors">
				ijsKoud
			</Link>
			<div className="flex justify-between gap-12 items-center">
				<Link href="#about" className="text-base font-semibold hover:text-primary transition-colors">
					About
				</Link>
				<Link href="#projects" className="text-base font-semibold hover:text-primary transition-colors">
					Projects
				</Link>
				<Link href="#contact" className="text-base font-semibold hover:text-primary transition-colors">
					Contact
				</Link>
				<ThemeButton />
				<MenuButton />
			</div>
		</div>
	);
};

export default Navbar;
