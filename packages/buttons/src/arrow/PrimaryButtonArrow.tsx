import React from "react";
import { PrimaryButton } from "../styled";
import type { ButtonProps } from "../types";
import ButtonArrow, { ArrowProps } from "./Arrow";

type Props = Partial<ArrowProps> & ButtonProps;

export const PrimaryButtonArrow: React.FC<React.PropsWithChildren<Props>> = (props) => {
	const { children, ...rest } = props;
	return (
		<PrimaryButton {...rest} className={`group flex items-center text-white bg-primary hover:bg-primary ${props.className}`}>
			{children} <ButtonArrow size={props.size ?? 15} />
		</PrimaryButton>
	);
};
