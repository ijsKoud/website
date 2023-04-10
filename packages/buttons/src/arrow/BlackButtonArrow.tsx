import React from "react";
import { PrimaryButton } from "../styled";
import type { ButtonProps } from "../types";
import ButtonArrow, { type ArrowProps } from "./Arrow";

type Props = Partial<ArrowProps> & ButtonProps;

export const BlackButtonArrow: React.FC<React.PropsWithChildren<Props>> = (props) => {
	const { children, ...rest } = props;
	return (
		<PrimaryButton {...rest} className={`group flex items-center text-white !bg-black hover:!bg-black ${props.className}`}>
			{children} <ButtonArrow size={props.size ?? 15} />
		</PrimaryButton>
	);
};
