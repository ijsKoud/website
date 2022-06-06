import AboutListItem from "../components/About/AboutListItem";
import AnimeList from "../components/Anime/AnimeList";
import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";

const AboutCards = [
	{
		title: "Bilingual Education",
		colours: ["#6EE7B7", "#3B82F6", "#9333EA"],
		banner: "https://cdn.discordapp.com/attachments/835619926667821117/983347041352704070/unknown.png",
		description: {
			small: "Finished 3 year bilingual education at the Mendel College.",
			large: "I finished my 3 years of bilingual education at the Mendel College, part of the TTO program I follow. The TTO program consists of 3 year bilingual education and the FCE and CAE certificate exam at the end of the 4th year (I have a total of 5 years)."
		},
		dates: {
			start: "3 September 2018",
			end: "10 July 2021"
		}
	},
	{
		title: "Cambridge Certificate",
		colours: ["#818CF8", "#D8B4FE"],
		banner: "https://cdn.discordapp.com/attachments/835619926667821117/983347974925074472/unknown.png",
		description: {
			small: "Passed the Cambridge B2 First exam.",
			large: "I passed the Cambridge B2 First exam with grade B. This is the second part of the TTO program I follow. The last step is to pass the CAE exam in July."
		},
		dates: {
			start: "13 November 2021"
		}
	}
];

const About: NextPageWithLanyard = () => {
	return (
		<Page>
			<div className="about-container">
				<div className="about-details">
					<div>
						<h1 className="about-title">About Me</h1>
						<p className="about-text">
							Hey, I’m Daan. 16 year-old full-stack developer from the Netherlands. The “hacker” of the family since the age of 10 😅. I
							wrote my first lines of code when I was 14 and I haven’t stopped ever since.
							<br />I love open-source projects, that’s why I always try to open-source as many of my projects as possible to show
							progammers and interested users how the code behind a certain button works.
						</p>
					</div>
					<div className="about-picture-wrapper">
						<img className="about-picture" src="https://static.daangamesdg.xyz/discord/pfp.gif" alt="picture" />
					</div>
				</div>
				<div>
					{AboutCards.map((data, key) => (
						<AboutListItem key={key} item={data} />
					))}
				</div>
				<div className="about-anime">
					<div>
						<h1 className="anime-title">Anime</h1>
						<p className="anime-text">
							I watch anime once in a while when I am bored and don&apos;t have anything else to do. Every episode I watch is logged on
							MyAnimeList and displayed here on my own website.
						</p>
						<AnimeList />
					</div>
				</div>
			</div>
		</Page>
	);
};

export default About;
