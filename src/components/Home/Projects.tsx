import React from "react";
import projectsList from "../../../assets/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen mb-48">
			<div className="flex flex-col w-4/5 max-xl:w-11/12">
				<div className="flex flex-col w-full">
					<h3 id="about" className="text-lg font-extrabold">
						PROJECTS
					</h3>
					<i className="border-black-500 dark:border-white-300 border mt-1" />
				</div>
				<div className="flex flex-col gap-32 max-lg:gap-12">
					{projectsList.map((item, key) => (
						<ProjectCard key={key} index={key} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
