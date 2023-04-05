import React from "react";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export const PageLayout: React.FC<Props> = ({ children, ...props }) => {
	return (
		<main {...props} className={`px-6 pt-20 ${props.className ?? ""}`}>
			{children}
		</main>
	);
};
