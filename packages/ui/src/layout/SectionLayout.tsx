import React from "react";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export const SectionLayout: React.FC<Props> = ({ children, ...props }) => {
	return (
		<div {...props} className={`px-[15%] ${props.className ?? ""}`}>
			{children}
		</div>
	);
};
