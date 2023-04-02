import React from "react";
import type { ButtonProps } from "../types";
import Button from "../Button";

export const PrimaryButton: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
	return <Button {...props} className={`${props.className} text-5 bg-primary-500 rounded-full py-2 px-4 hover:bg-primary-800 transition-colors`} />;
};
