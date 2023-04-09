import { ABOUT_ME_EXPERIENCE, ABOUT_ME_TEXT, LANDING_BULLET_POINTS, LANDING_TEXT, PROJECTS_LIST } from "@website/constants";
import { EmojiBulletPoint, PageLayout, PageSection, SlideFade, GridIllustration, Experience, ProjectCard, ContactForm, inter } from "@website/ui";
import { BlackButton, PrimaryButtonArrow } from "@website/buttons";
import type { NextPage } from "next";
import Markdown from "@website/markdown";
import { onContactSubmit } from "../lib/email";

const Home: NextPage = () => {
	return (
		<PageLayout className="min-h-screen flex flex-col gap-y-52">
			{/* <-- LANDING INTRODUCTION SECTION --> */}
			<PageSection className="h-[calc(100vh-192px)]">
				<SlideFade delay={0.5} className="relative flex flex-col gap-y-1">
					<GridIllustration className="top-0 left-0 -translate-x-11 -translate-y-11" />
					<h2 className="text-primary text-12 font-normal leading-[95%] w-fit max-lg:text-10 max-sm:text-8 max-[400px]:text-6">
						<Markdown allowedElements={["strong", "code", "p"]}>{LANDING_TEXT.title.toUpperCase()}</Markdown>
					</h2>
					<h1 className="text-24 leading-[80%] w-fit max-lg:text-20 max-sm:text-14 max-[400px]:text-10" style={inter.style}>
						{LANDING_TEXT.name.toUpperCase()}
					</h1>
				</SlideFade>
				<SlideFade delay={0.6}>
					<h3 className="dark:text-light-gray text-zinc-500 text-12 font-semibold leading-[95%] pt-4 w-3/4 max-lg:text-10 max-md:w-full max-sm:text-8 max-[400px]:text-6 mb-10">
						<Markdown allowedElements={["strong", "code", "p"]}>{LANDING_TEXT.subtitle}</Markdown>
					</h3>
				</SlideFade>
				<SlideFade delay={0.7} className="w-fit -mt-4 mb-10">
					{LANDING_BULLET_POINTS.map((bullet, key) => (
						<EmojiBulletPoint {...bullet} key={key} />
					))}
				</SlideFade>
				<SlideFade delay={0.8} className="w-fit flex gap-4 max-[400px]:flex-col max-[400px]:gap-2">
					<PrimaryButtonArrow type="link" href="/#about" className="max-[400px]:text-4">
						About myself
					</PrimaryButtonArrow>
					<BlackButton type="link" href="/guestbook" className="max-[400px]:text-4">
						Guest book
					</BlackButton>
				</SlideFade>
			</PageSection>

			{/* <-- ABOUT ME SECTION --> */}
			<PageSection className="items-center">
				<div className="flex flex-col gap-y-4 relative">
					<SlideFade useInView>
						<GridIllustration className="top-0 left-0 -translate-x-11 -translate-y-11 h-28" />
						<h1 id="about" className="text-16 leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10" style={inter.style}>
							About Me
						</h1>
					</SlideFade>
					<SlideFade useInView delay={0.2} className="flex justify-between max-lg:flex-col max-lg:mb-8">
						<div className="text-5 w-3/5 flex flex-col gap-y-4 max-lg:w-full">
							<Markdown>{ABOUT_ME_TEXT}</Markdown>
						</div>
						<img
							alt="Profile picture"
							src="/profile.png"
							className="-translate-y-10 w-64 h-[332px] max-lg:translate-y-0 overflow-hidden"
						/>
					</SlideFade>
					<div className="flex flex-col gap-y-4">
						{Object.keys(ABOUT_ME_EXPERIENCE).map((id, key) => (
							<Experience key={key} id={id} style={inter.style} />
						))}
					</div>
				</div>
			</PageSection>

			{/* <-- PROJECTS SECTION --> */}
			<PageSection className="items-center mt-24">
				<div className="flex flex-col gap-y-4 relative">
					<div className="flex gap-8 max-lg:gap-4 max-md:flex-col">
						<div>
							<SlideFade useInView>
								<GridIllustration className="top-0 left-0 -translate-x-11 -translate-y-11 h-28" />
								<h1
									id="projects"
									className="text-16 leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10"
									style={inter.style}
								>
									Projects
								</h1>
								<h2 className="text-6 mt-2 mb-3">Here are some of the projects I&apos;ve worked on</h2>
								<PrimaryButtonArrow type="link" href="/projects">
									View more
								</PrimaryButtonArrow>
							</SlideFade>
							{/* FOR BIGGER DEVICES */}
							<div className="flex-col gap-8 mt-8 lg:flex hidden">
								{PROJECTS_LIST.filter((_, key) => key % 2 === 1)
									.slice(0, 2)
									.map((project, key) => (
										<ProjectCard key={key} {...project} />
									))}
							</div>
						</div>
						{/* FOR BIGGER DEVICES */}
						<div className="flex-col gap-8 lg:flex hidden">
							{PROJECTS_LIST.filter((_, key) => key % 2 === 0)
								.slice(0, 2)
								.map((project, key) => (
									<ProjectCard key={key} {...project} />
								))}
						</div>
						{/* FOR SMALLER DEVICES */}
						<div className="flex flex-col gap-8 lg:hidden">
							{PROJECTS_LIST.slice(0, 4).map((project, key) => (
								<ProjectCard key={key} {...project} />
							))}
						</div>
					</div>
				</div>
			</PageSection>

			{/* <-- CONTACT SECTION --> */}
			<PageSection className="items-center mt-24">
				<div className="flex flex-col gap-y-4 relative">
					<div className="flex gap-8 max-lg:gap-4 max-md:flex-col">
						<div>
							<SlideFade useInView>
								<GridIllustration className="top-0 left-0 -translate-x-11 -translate-y-11 h-28" />
								<h1
									id="contact"
									className="text-16 leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10"
									style={inter.style}
								>
									Contact
								</h1>
								<h2 className="text-6 mt-2 mb-3 w-3/4 max-sm:w-full">
									Interested in my work? Leave your contact details below and I will contact you back as soon as possible!
								</h2>
							</SlideFade>
							<ContactForm onSubmit={onContactSubmit} />
						</div>
					</div>
				</div>
			</PageSection>
		</PageLayout>
	);
};

export default Home;
