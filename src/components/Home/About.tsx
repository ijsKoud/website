import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="flex flex-col w-4/5">
				<div className="flex flex-col w-full">
					<h3 id="about" className="text-lg font-extrabold">
						ABOUT ME
					</h3>
					<i className="border-white-300 border mt-1" />
				</div>
				<div className="flex justify-between mt-6">
					<div className="w-3/5 flex flex-col gap-5">
						<p className="font-normal text-base">
							Hey, I am Daan. A 16 year-old full-stack developer & anime lover from the Netherlands. Who knew that writing half-working
							chat bots by following a simple tutorial in 2020 would bring me here. I guess that that one tutorial decided my whole
							life.
						</p>
						<p className="font-normal text-base">
							Anyway, fast-forward to today; I love programming and work on a series of projects you can find below,{" "}
							<Link href="#contact" className="text-primary hover:text-primary-600 transition-colors">
								maybe yours too
							</Link>
							. I love open-source, hence why this website and many other projects are open to the public!
						</p>
						<p className="font-normal text-base">
							I am still young which means plenty of time to grow and improve, I have however already worked with a couple of
							technologies before:
						</p>
						<div className="flex text-base font-normal gap-14 ml-5">
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
						<Image src="/assets/svg/profile.svg" height={400} width={300} alt="profile picture" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
