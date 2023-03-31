import Link from "next/link";
import React, { useState } from "react";
import { MenuButton } from "./buttons";

const Menu: React.FC = () => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);
	const closeMenu = () => setMenu(false);

	const opacity = menu ? "opacity-100" : "opacity-0";

	return (
		<div>
			<MenuButton menu={menu} toggleMenu={toggleMenu} />
			<div
				className={`bg-white dark:bg-background-alt rounded-md flex flex-col absolute right-12 max-md:right-8 py-2 px-4 border-light-gray dark:border-background border-2 ${opacity} ${
					menu ? "pointer-events-auto" : "pointer-events-none"
				} transition-opacity`}
			>
				<Link onClick={closeMenu} className="text-5 font-semibold hover:text-primary transition-colors md:hidden" href="/#about">
					About
				</Link>
				<Link onClick={closeMenu} className="text-5 font-semibold hover:text-primary transition-colors md:hidden" href="/#projects">
					Projects
				</Link>
				<Link onClick={closeMenu} className="text-5 font-semibold hover:text-primary transition-colors md:hidden" href="/#contact">
					Contact
				</Link>
				<Link onClick={closeMenu} className="text-5 font-semibold hover:text-primary transition-colors" href="/anime">
					Anime
				</Link>
			</div>
		</div>
	);
};

export default Menu;
