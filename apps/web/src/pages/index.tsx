import { LANDING_BULLET_POINTS, LANDING_TEXT } from "@website/constants";
import { EmojiBulletPoint, PageLayout } from "@website/ui";
import { BlackButton, PrimaryButtonArrow } from "@website/buttons";
import type { NextPage } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: "800" });

const Home: NextPage = () => {
	return (
		<PageLayout className="min-h-screen">
			<section className="flex flex-col items-center justify-center h-[calc(100vh-192px)]">
				<div className="flex flex-col gap-y-10">
					<div className="flex flex-col gap-y-1">
						<h2 className="text-primary text-12 font-normal leading-[95%] w-fit max-lg:text-10 max-sm:text-8 max-[400px]:text-6">
							{LANDING_TEXT.title.toUpperCase()}
						</h2>
						<h1 className="text-24 leading-[80%] w-fit max-lg:text-20 max-sm:text-14 max-[400px]:text-10" style={inter.style}>
							{LANDING_TEXT.name.toUpperCase()}
						</h1>
						<h3 className="text-light-gray text-12 font-semibold leading-[95%] pt-4 w-3/4 max-lg:text-10 max-md:w-full max-sm:text-8 max-[400px]:text-6">
							{LANDING_TEXT.subtitle}
						</h3>
					</div>
					<div className="w-fit -mt-4">
						{LANDING_BULLET_POINTS.map((bullet, key) => (
							<EmojiBulletPoint {...bullet} key={key} />
						))}
					</div>
					<div className="w-fit flex gap-4 max-[400px]:flex-col max-[400px]:gap-2">
						<PrimaryButtonArrow type="link" href="/#about" className="max-[400px]:text-4">
							About myself
						</PrimaryButtonArrow>
						<BlackButton type="link" href="/#about" className="max-[400px]:text-4">
							Guest book
						</BlackButton>
					</div>
				</div>
			</section>
		</PageLayout>
	);
};

export default Home;
