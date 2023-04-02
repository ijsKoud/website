import React from "react";
import Link from "next/link";
import type { ButtonProps } from "./types";

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
	if (props.type === "button")
		return (
			<button {...props} className={`w-fit ${props.className ?? ""}`}>
				{props.children}
			</button>
		);

	return (
		<Link {...props} className={`w-fit ${props.className ?? ""}`}>
			{props.children}
		</Link>
	);
};

export default Button;
