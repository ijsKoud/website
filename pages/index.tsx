import TypewriterComponent from "typewriter-effect";
import IconButton from "../components/IconButton";
import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";

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
		path: "email:daan@daangamesdg.xyz"
	},
	{
		icon: "fa-solid fa-location-arrow",
		title: "Haarlem, NL",
		path: "https://google.com/maps/place/Haarlem/"
	}
];

const Home: NextPageWithLanyard = () => {
	return (
		<Page>
			<div className="home-container">
				<div>
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
							<IconButton key={key} {...data} type="link" style={data.title ? "black" : "string"} />
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Home;
