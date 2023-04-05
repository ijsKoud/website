import React from "react";

export const PageSection: React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>> = ({ children, className, ...props }) => {
	return (
		<section
			className={`flex flex-col justify-center pe-[10vw] ps-[10vw] max-md:pe-[5vw] max-md:ps-[5vw] max-sm:pe-0 max-sm:ps-0 ${className ?? ""}`}
			{...props}
		>
			{children}
		</section>
	);
};
