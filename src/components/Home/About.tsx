import Link from "next/link";
import React from "react";
import HomeSectionLayout from "../HomeSectionLayout";

const About = () => {
	return (
		<HomeSectionLayout title="ABOUT ME" id="about" width="w-4/5">
			<div className="flex justify-between mt-6 max-lg:flex-col">
				<div className="w-3/5 max-lg:w-full flex flex-col gap-5">
					<p className="font-normal text-base max-xl:text-sm">
						Hey, I am Daan. A 16 year-old full-stack developer & anime lover from the Netherlands. Who knew that writing half-working chat
						bots by following a simple tutorial in 2020 would bring me here. I guess that that one tutorial decided my whole life.
					</p>
					<p className="font-normal text-base max-xl:text-sm">
						Anyway, fast-forward to today; I love programming and work on a series of projects you can find below,{" "}
						<Link href="#contact" className="text-primary hover:text-primary-600 transition-colors">
							maybe yours too
						</Link>
						. I love open-source, hence why this website and many other projects are open to the public!
					</p>
					<p className="font-normal text-base max-xl:text-sm">
						I am still young which means plenty of time to grow and improve, I have however already worked with a couple of technologies
						before:
					</p>
					<div className="flex text-base font-normal gap-14 ml-5 max-2xl:text-sm max-lg:gap-0 max-lg:justify-between">
						<ul className="list-disc">
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>Node.js</li>
						</ul>
						<ul className="list-disc">
							<li>React</li>
							<li>Next.js</li>
							<li>PostgreSQL</li>
						</ul>
					</div>
				</div>
				<div>
					<img src="/assets/svg/profile.svg" className="h-96 max-2xl:h-80 max-xl:w-full max-lg:mt-6" loading="lazy" alt="profile picture" />
				</div>
			</div>
		</HomeSectionLayout>
	);
};

export default About;
