import React from "react";

const Home = () => {
	return (
		<div className="grid place-items-center min-h-screen -mt-[70px]">
			<div>
				<h3 className="text-xl text-primary font-normal leading-3 max-lg:text-lg max-md:text-base">HEY, MY NAME IS</h3>
				<h1 className="text-4xl font-extrabold max-lg:text-3xl max-md:text-2xl max-sm:text-xl">DAAN KLARENBEEK</h1>
				<h2 className="text-2xl text-dark-gray dark:text-light-gray font-semibold leading-10 w-[42rem] -mt-3 max-lg:text-xl max-lg:w-[34rem] max-md:text-lg max-md:leading-8 max-md:w-[26rem] max-sm:text-base max-sm:w-[22rem] max-sm:leading-6">
					Full-stack developer building apps for the internet.
				</h2>
			</div>
		</div>
	);
};

export default Home;
