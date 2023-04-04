import { LANDING_BULLET_POINTS, LANDING_TEXT } from "@website/constants";
import { EmojiBulletPoint, PageLayout, SlideFade } from "@website/ui";
import { BlackButton, PrimaryButtonArrow } from "@website/buttons";
import type { NextPage } from "next";
import { Inter } from "next/font/google";
import Markdown from "@website/markdown";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: "800" });

const Home: NextPage = () => {
	const [theme, setTheme] = useState("dark");
	const { theme: _theme } = useTheme();

	useEffect(() => {
		if (_theme) setTheme(_theme);
	}, [_theme]);

	return (
		<PageLayout className="min-h-screen">
			<section className="flex flex-col items-center justify-center h-[calc(100vh-192px)]">
				<div className="flex flex-col">
					<SlideFade delay={0.5} className="relative flex flex-col gap-y-1">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							aria-hidden
							src={theme === "light" ? "/grid/light.svg" : "/grid/dark.svg"}
							alt="Grid illustration"
							className="absolute -z-10 top-0 left-0 -translate-x-11 -translate-y-11"
						/>
						<h2 className="text-primary text-12 font-normal leading-[95%] w-fit max-lg:text-10 max-sm:text-8 max-[400px]:text-6">
							<Markdown>{LANDING_TEXT.title.toUpperCase()}</Markdown>
						</h2>
						<h1 className="text-24 leading-[80%] w-fit max-lg:text-20 max-sm:text-14 max-[400px]:text-10" style={inter.style}>
							{LANDING_TEXT.name.toUpperCase()}
						</h1>
					</SlideFade>
					<SlideFade delay={0.6}>
						<h3 className="dark:text-light-gray text-zinc-500 text-12 font-semibold leading-[95%] pt-4 w-3/4 max-lg:text-10 max-md:w-full max-sm:text-8 max-[400px]:text-6 mb-10">
							<Markdown>{LANDING_TEXT.subtitle}</Markdown>
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
				</div>
			</section>
		</PageLayout>
	);
};

export default Home;
