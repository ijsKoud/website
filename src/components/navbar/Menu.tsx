import Link from "next/link";
import React, { useState } from "react";
import MenuButton from "./MenuButton";

const Menu = () => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);
	const closeMenu = () => setMenu(false);

	const opacity = menu ? "opacity-100" : "opacity-0";

	return (
		<div>
			<MenuButton menu={menu} toggleMenu={toggleMenu} />
			<div
				className={`bg-background-alt rounded-md flex flex-col absolute right-12 py-2 px-4 border-background border-2 ${opacity} transition-opacity`}
			>
				<Link onClick={closeMenu} className="text-base font-semibold hover:text-primary transition-colors" href="/anime">
					Anime
				</Link>
				<Link onClick={closeMenu} className="text-base font-semibold hover:text-primary transition-colors" href="/cc">
					Discount
				</Link>
			</div>
		</div>
	);
};

export default Menu;
