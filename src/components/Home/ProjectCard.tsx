import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FadeInAnimation } from "../animations/general";

interface Props {
	name: string;
	slogan: string;
	description: string;
	image: string;
	links: Links;
	index: number;
}

interface Links {
	github: string;
	page: string;
}

const ProjectCard: React.FC<Props> = ({ name, slogan, description, links, image, index }) => {
	const indexRes = index % 2 === 0;

	return (
		<motion.div
			variants={FadeInAnimation}
			initial="initial"
			whileInView="inView"
			viewport={{ once: true, amount: 0.5 }}
			className={`mt-10 flex ${
				indexRes ? "flex-row-reverse" : "flex-row"
			} justify-between items-center gap-12 w-full relative max-lg:flex-col max-lg:gap-0`}
		>
			<div className="relative max-w-[700px] max-2xl:max-w-[600px] max-xl:max-w-[500px] max-lg:max-w-full rounded-md">
				<img className="w-full rounded-md" src={image} alt="project-preview" loading="lazy" />
			</div>
			<div
				className={`w-1/2 rounded-md ${
					indexRes ? "left-0" : "right-0"
				} bg-white dark:bg-background-alt px-4 py-2 absolute shadow-lg max-lg:relative max-lg:-mt-8 max-lg:w-4/5`}
			>
				<div>
					<h1 className="font-extrabold text-xl max-xl:text-lg">{name}</h1>
					<h3 className="font-semibold text-base leading-6 -mt-1 mb-2 max-xl:text-sm">{slogan}</h3>
				</div>
				<p className="font-normal text-sm mb-2">{description}</p>
				<div className="text-base flex gap-2">
					<Link className="hover:text-primary transition-colors" href={`/github/${links.github}`} target="_blank">
						<i className="fa-brands fa-github" />
					</Link>
					<Link className="hover:text-primary transition-colors" href={links.page} target="_blank">
						<i className="fa-solid fa-arrow-up-right-from-square" />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
