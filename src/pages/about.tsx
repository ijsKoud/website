import AboutList from "../components/page-related/About/AboutList";
import AnimeList from "../components/page-related/Anime/AnimeList";
import Page from "../components/general/Page";
import Title from "../components/general/Title";
import type { NextPageWithLanyard } from "../lib/types";
import config from "../../config.json";

const About: NextPageWithLanyard = () => {
	return (
		<Page>
			<Title title="About me" />
			<div className="about-container">
				<div className="about-details">
					<div>
						<h1 className="about-title">About Me</h1>
						<p className="about-text">{config.pages.about.about.text}</p>
					</div>
					<div className="about-picture-wrapper">
						<img className="about-picture" src={config.pages.about.about.picture} alt="picture" />
					</div>
				</div>
				<div className="about-list-container">
					<AboutList />
				</div>
				{config.pages.about.anime.enabled ? (
					<div className="about-anime">
						<div>
							<h1 className="anime-title">Anime</h1>
							<p className="anime-text">{config.pages.about.anime.text}</p>
							<AnimeList />
						</div>
					</div>
				) : null}
			</div>
		</Page>
	);
};

export default About;
