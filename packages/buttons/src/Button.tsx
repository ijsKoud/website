import React from "react";
import Link from "next/link";
import type { ButtonProps } from "./types";

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
	if (props.type === "button") return <button {...props}>{props.children}</button>;
	return <Link {...props}>{props.children}</Link>;
};

export default Button;
