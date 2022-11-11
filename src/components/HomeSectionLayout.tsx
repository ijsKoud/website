import { Variants, motion } from "framer-motion";
import React from "react";

interface Props {
	title: string;
	id: string;
	width: string;
	contactTitle?: boolean;
}

const LayoutAnimation: Variants = {
	initial: {
		opacity: 0,
		transform: "translateY(1rem)"
	},
	inView: {
		opacity: 1,
		transform: "translateY(0rem)",
		transition: {
			duration: 0.5,
			ease: [0.6, 0, 0.17, 1]
		}
	}
};

const HomeSectionLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, title, id, width, contactTitle }) => {
	return (
		<motion.div
			variants={LayoutAnimation}
			initial="initial"
			whileInView="inView"
			viewport={{ once: true, amount: 0.5 }}
			className="flex flex-col justify-center items-center min-h-screen mb-48"
		>
			<div className={`flex flex-col ${width} max-xl:w-11/12`}>
				{contactTitle ? (
					<div className="flex flex-col items-center w-full">
						<h3 id={id} className="text-2xl font-extrabold max-sm:text-lg">
							{title}
						</h3>
					</div>
				) : (
					<div className="flex flex-col w-full">
						<h3 id={id} className="text-xl font-extrabold max-sm:text-lg">
							{title}
						</h3>
						<i className="border-black-500 dark:border-white-300 border mt-1" />
					</div>
				)}
				{children}
			</div>
		</motion.div>
	);
};

export default HomeSectionLayout;
