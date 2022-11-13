import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HeadTitle from "../components/HeadTitle";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Landing from "../components/Home/Landing";
import Projects from "../components/Home/Projects";

const Home = () => {
	const { asPath } = useRouter();

	useEffect(() => {
		if (asPath.startsWith("/#")) {
			const id = asPath.replace("/#", "");
			const el = document.getElementById(id);

			if (el) el.scrollIntoView();
		}
	}, [asPath]);

	return (
		<div className="min-h-screen px-40 -mt-24 max-lg:px-28 max-md:px-9 max-sm:px-3">
			<HeadTitle title="Daan Klarenbeek" />
			<Landing />
			<About />
			<Projects />
			<Contact />
		</div>
	);
};

export default Home;
