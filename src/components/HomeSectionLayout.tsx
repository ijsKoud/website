import React from "react";

interface Props {
	title: string;
	id: string;
	width: string;
}

const HomeSectionLayout = ({ children, title, id, width }: React.PropsWithChildren<Props>) => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen mb-48">
			<div className={`flex flex-col ${width} max-xl:w-11/12`}>
				<div className="flex flex-col w-full">
					<h3 id={id} className="text-xl font-extrabold max-sm:text-lg">
						{title}
					</h3>
					<i className="border-black-500 dark:border-white-300 border mt-1" />
				</div>
				{children}
			</div>
		</div>
	);
};

export default HomeSectionLayout;
