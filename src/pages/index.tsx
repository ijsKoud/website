import React from "react";
import About from "../components/Home/About";
import Landing from "../components/Home/Landing";
import Projects from "../components/Home/Projects";

const Home = () => {
	return (
		<div className="min-h-screen px-40 -mt-24 max-lg:px-28 max-md:px-9 max-sm:px-3">
			<Landing />
			<About />
			<Projects />
		</div>
	);
};

export default Home;
