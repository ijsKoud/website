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

	const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		props.onClick?.(event);

		const href = props.href.toString().replace("/", "");
		if (href.startsWith("#")) {
			event.preventDefault();

			const destination = document.querySelector(href);
			if (destination) {
				location.href = props.href.toString();
				destination.scrollIntoView({
					behavior: "smooth"
				});
			}
		}
	};

	return (
		<Link {...props} onClick={onClick} className={`w-fit ${props.className ?? ""}`}>
			{props.children}
		</Link>
	);
};

export default Button;
