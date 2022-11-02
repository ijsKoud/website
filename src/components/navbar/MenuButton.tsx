import React from "react";

interface Props {
	menu: boolean;
	toggleMenu: () => void;
}

const MenuButton: React.FC<Props> = ({ menu, toggleMenu }) => {
	return (
		<button className="text-lg font-semibold hover:text-primary transition-colors flex" onClick={toggleMenu}>
			<p>·</p>
			<p className={`transform ${menu ? "translate-y-1" : "translate-y-0"} transition-transform`}>·</p>
			<p>·</p>
		</button>
	);
};

export default MenuButton;
