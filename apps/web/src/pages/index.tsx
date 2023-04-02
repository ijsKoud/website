import { LANDING_BULLET_POINTS, LANDING_TEXT } from "@website/constants";
import { EmojiBulletPoint, PageLayout, SectionLayout } from "@website/ui";
import { BlackButton, PrimaryButtonArrow } from "@website/buttons";
import type { NextPage } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: "800" });

const Home: NextPage = () => {
	return (
		<PageLayout className="min-h-screen">
			<SectionLayout className="flex flex-col gap-y-10 items-center justify-center h-[calc(100vh-192px)]">
				<div className="flex flex-col gap-1">
					<h2 className="text-primary text-12 font-normal leading-[95%]">{LANDING_TEXT.title.toUpperCase()}</h2>
					<h1 className="text-24 leading-[80%]" style={inter.style}>
						{LANDING_TEXT.name.toUpperCase()}
					</h1>
					<h3 className="text-light-gray text-12 font-semibold leading-[95%] pt-4 w-5/6">{LANDING_TEXT.subtitle}</h3>
				</div>
				<div className="w-full">
					{LANDING_BULLET_POINTS.map((bullet, key) => (
						<EmojiBulletPoint {...bullet} key={key} />
					))}
				</div>
				<div className="w-full flex items-center gap-x-4">
					<PrimaryButtonArrow type="link" href="/#about">
						About myself
					</PrimaryButtonArrow>
					<BlackButton type="link" href="/#about">
						Guest book
					</BlackButton>
				</div>
			</SectionLayout>
		</PageLayout>
	);
};

export default Home;
