import React from "react";
import projectsList from "../../../assets/projects.json";
import HomeSectionLayout from "../HomeSectionLayout";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<HomeSectionLayout title="PROJECTS" id="projects" width="w-4/5">
			<div className="flex flex-col gap-32 max-lg:gap-12">
				{projectsList.map((item, key) => (
					<ProjectCard key={key} index={key} {...item} />
				))}
			</div>
		</HomeSectionLayout>
	);
};

export default Projects;
