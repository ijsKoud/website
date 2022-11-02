import React, { useState } from "react";

const MenuButton = () => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => setMenu(!menu);

	return (
		<button className="text-lg font-semibold hover:text-primary transition-colors flex" onClick={toggleMenu}>
			<p>·</p>
			<p className={`translate-y-[${menu ? "5px" : "0px"}] transition-transform`}>·</p>
			<p>·</p>
		</button>
	);
};

export default MenuButton;
