import React from "react";
import type { ButtonProps } from "../types";
import Button from "../Button";

export const BlackButton: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
	return (
		<Button
			{...props}
			className={`${props.className ?? ""} text-5 text-white bg-black-500 rounded-full py-2 px-4 hover:bg-black-800 transition-colors`}
		/>
	);
};
