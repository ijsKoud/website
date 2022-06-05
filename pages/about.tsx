import axios from "axios";
import { useEffect, useState } from "react";
import AnimeListItem from "../components/Anime/AnimeListItem";
import Page from "../components/Page";
import type { AnimeList, NextPageWithLanyard } from "../lib/types";

const About: NextPageWithLanyard = () => {
	const [anime, setAnime] = useState<AnimeList[]>([]);

	useEffect(() => {
		axios
			.get<{ list: AnimeList[] }>("/api/anime")
			.then((data) => setAnime(data.data.list))
			.catch(() => void 0);
	}, []);

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
					<img className="about-picture" src="https://static.daangamesdg.xyz/discord/pfp.gif" alt="picture" />
				</div>
				<div className="about-anime">
					<div>
						<h1 className="anime-title">Anime</h1>
						<p className="anime-text">
							I watch anime once in a while when I am bored and don&apos;t have anything else to do. Every episode I watch is logged on
							MyAnimeList and displayed here on my own website.
						</p>
						{/* <AnimeListItem
							// @ts-ignore fixed later
							anime={{
								title: "Ansatsu Kyoushitsu",
								status: 1,
								url: "https://myanimelist.net/anime/24833/Ansatsu_Kyoushitsu",
								image: "https://cdn.myanimelist.net/r/192x272/images/anime/5/75639.jpg?s=446c4a2d1f128c0d206af25d7e652b56"
							}}
						/> */}
						{anime.map((item) => (
							<AnimeListItem key={item.title} anime={item} />
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default About;
