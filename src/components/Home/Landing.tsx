import Link from "next/link";
import React from "react";

const Landing = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="flex flex-col">
				<h3 className="text-xl text-primary font-normal leading-3 max-lg:text-lg max-md:text-base max-sm:text-sm">HEY, MY NAME IS</h3>
				<h1 className="text-4xl font-extrabold max-lg:text-3xl max-md:text-2xl max-sm:text-lg max-sm:leading-7">DAAN KLARENBEEK</h1>
				<h2 className="text-2xl text-dark-gray dark:text-light-gray font-semibold leading-10 w-[42rem] -mt-3 max-lg:text-xl max-lg:w-[34rem] max-md:text-lg max-md:leading-8 max-md:w-[26rem] max-sm:text-sm max-sm:w-[15rem] max-sm:leading-4 max-sm:mt-px">
					Full-stack developer building apps for the internet.
				</h2>
				<Link
					href="#about"
					className="text-base max-sm:text-sm max-sm:px-2 max-sm:py-1 font-semibold text-primary border-2 border-primary px-4 py-2 rounded-md w-fit mt-6 hover:bg-primary-300 hover:dark:text-white hover:text-black transition-colors"
				>
					About myself
				</Link>
			</div>
		</div>
	);
};

export default Landing;
