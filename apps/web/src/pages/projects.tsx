import { PROJECTS_LIST } from "@website/constants";
import { PageLayout, PageSection, SlideFade, GridIllustration, ProjectCard, inter } from "@website/ui";
import Fuse from "fuse.js";
import type { NextPage } from "next";
import React, { useState } from "react";

const Projects: NextPage = () => {
	const [projects, setProjects] = useState(PROJECTS_LIST);
	const onSearchChange = (ctx: React.ChangeEvent<HTMLInputElement>) => {
		const input = ctx.currentTarget.value.trim();
		if (!input) {
			setProjects(PROJECTS_LIST);
			return;
		}

		const fuse = new Fuse(PROJECTS_LIST, { keys: ["name"], isCaseSensitive: false, threshold: 0.2 });
		const results = fuse.search(input).map((result) => result.item);
		setProjects(results);
	};

	return (
		<PageLayout className="min-h-screen flex flex-col gap-y-52 pt-28">
			<PageSection className="items-center !pe-0 !ps-0">
				<div className="flex flex-col gap-y-4 relative">
					<SlideFade useInView className="w-full flex flex-col items-center justify-center">
						<GridIllustration className="top-0 left-1/2 -translate-x-44 -translate-y-11 h-28" />
						<h1 className="text-16 leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10" style={inter.style}>
							Projects
						</h1>
						<div className="relative">
							<i aria-hidden className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 translate-y-0.5" />
							<input
								onChange={onSearchChange}
								type="search"
								placeholder="Search for projects..."
								className="rounded-lg p-2 bg-zinc-100 dark:bg-black w-64 mt-5"
							/>
						</div>
					</SlideFade>
					<div className="flex flex-wrap justify-center gap-4 mt-8">
						{projects.map((project, key) => (
							<ProjectCard key={key} {...project} />
						))}
					</div>
				</div>
			</PageSection>
		</PageLayout>
	);
};

export default Projects;
