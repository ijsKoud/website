import { ABOUT_ME_EXPERIENCE, ABOUT_ME_TEXT, LANDING_BULLET_POINTS, LANDING_TEXT } from "@website/constants";
import { EmojiBulletPoint, PageLayout, SlideFade } from "@website/ui";
import { BlackButton, PrimaryButtonArrow } from "@website/buttons";
import type { NextPage } from "next";
import { Inter } from "next/font/google";
import Markdown from "@website/markdown";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["800", "600"] });

const Home: NextPage = () => {
	const [theme, setTheme] = useState("dark");
	const { theme: _theme } = useTheme();

	useEffect(() => {
		if (_theme) setTheme(_theme);
	}, [_theme]);

	return (
		<PageLayout className="min-h-screen flex flex-col gap-y-52">
			<section className="flex flex-col justify-center h-[calc(100vh-192px)] pe-[10vw] ps-[10vw] max-md:pe-[5vw] max-md:ps-[5vw] max-sm:pe-0 max-sm:ps-0">
				<SlideFade delay={0.5} className="relative flex flex-col gap-y-1">
					<img
						aria-hidden
						src={theme === "light" ? "/grid/light.svg" : "/grid/dark.svg"}
						alt="Grid illustration"
						className="absolute -z-10 top-0 left-0 -translate-x-11 -translate-y-11"
					/>
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
					<BlackButton type="link" href="/#about" className="max-[400px]:text-4">
						Guest book
					</BlackButton>
				</SlideFade>
			</section>
			<section className="flex flex-col items-center justify-center pe-[10vw] ps-[10vw] max-md:pe-[5vw] max-md:ps-[5vw] max-sm:pe-0 max-sm:ps-0">
				<div className="flex flex-col gap-y-4 relative">
					<img
						aria-hidden
						src={theme === "light" ? "/grid/light.svg" : "/grid/dark.svg"}
						alt="Grid illustration"
						className="absolute -z-10 top-0 left-0 -translate-x-11 -translate-y-11 h-28"
					/>
					<h1 id="about" className="text-16 leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10" style={inter.style}>
						About Me
					</h1>
					<div className="flex justify-between max-lg:flex-col max-lg:mb-8">
						<div className="text-5 w-3/5 flex flex-col gap-y-4 max-lg:w-full">
							<Markdown>{ABOUT_ME_TEXT}</Markdown>
						</div>
						<img
							alt="Profile picture"
							src="/profile.png"
							className="-translate-y-10 w-64 h-[332px] max-lg:translate-y-0 overflow-hidden"
						/>
					</div>
					<div className="flex flex-col gap-y-4">
						{Object.keys(ABOUT_ME_EXPERIENCE).map((id, key) => (
							<div key={key}>
								<h2 className="text-6" style={inter.style}>
									{id}
								</h2>
								<ul>
									{ABOUT_ME_EXPERIENCE[id as keyof typeof ABOUT_ME_EXPERIENCE].map((item, k) => (
										<li key={k} className="float-left mx-1 first:ml-0 last:mr-0">
											<img alt={item.name} className="h-14" src={item.image} />
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
		</PageLayout>
	);
};

export default Home;
