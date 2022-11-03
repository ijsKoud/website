import React from "react";
import About from "../components/Home/About";
import Landing from "../components/Home/Landing";

const Home = () => {
	return (
		<div className="min-h-screen px-40 -mt-24">
			<Landing />
			<About />
		</div>
	);
};

export default Home;
