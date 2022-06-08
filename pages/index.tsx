import TypewriterComponent from "typewriter-effect";
import IconButton from "../components/IconButton";
import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";
import { motion, Variants } from "framer-motion";
import Title from "../components/Title";

const buttonsList = [
	{
		icon: "fa-brands fa-github",
		path: "/github"
	},
	{
		icon: "fa-brands fa-discord",
		path: "/discord"
	},
	{
		icon: "fa-solid fa-envelope",
		path: "mailto:daan@daangamesdg.xyz"
	},
	{
		icon: "fa-solid fa-location-arrow",
		title: "Haarlem, NL",
		path: "https://google.com/maps/place/Haarlem/"
	}
];

const getVariants = (key: number) => {
	const variants: Variants = {
		initial: {
			transform: "translateY(10px)",
			opacity: 0
		},
		animate: {
			transform: "translateY(0px)",
			opacity: 1,
			transition: {
				delay: key * 0.1,
				duration: 0.3,
				ease: [0.6, 0, 0.17, 1]
			}
		}
	};

	return variants;
};

const Home: NextPageWithLanyard = () => {
	return (
		<Page>
			<Title title="Landing" />
			<div className="home-container">
				<div className="home-content">
					<div className="home-title">
						<h1>Hey, I&apos;m</h1>
						<TypewriterComponent
							options={{ wrapperClassName: "home-title-name" }}
							onInit={(typewriter) => typewriter.typeString("Daan").start()}
						/>
					</div>
					<p className="home-description">16 year-old anime lover and full-stack developer.</p>
					<div className="home-buttons">
						{buttonsList.map((data, key) => (
							<motion.div key={key} initial="initial" animate="animate" variants={getVariants(key)}>
								<IconButton {...data} type="link" style={data.title ? "black" : "string"} />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Home;
