import type { LinkProps } from "next/link";

export interface ButtonLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
	type: "link";
}

export interface ButtonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	type: "button";
}

export type ButtonProps = ButtonButtonProps | ButtonLinkProps;
