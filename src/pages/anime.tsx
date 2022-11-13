import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimeCard from "../components/Anime/AnimeCard";
import HeadTitle from "../components/HeadTitle";
import HomeSectionLayout from "../components/HomeSectionLayout";
import type { Anime } from "../lib/types";

const AnimeComp: React.FC = () => {
	const [anime, setAnime] = useState<Anime[]>([]);

	useEffect(() => {
		axios
			.get<Anime[]>("/api/anime")
			.then((res) => setAnime(res.data))
			.catch(() => void 0);
	}, []);

	return (
		<div className="min-h-screen w-full mt-6 px-40 max-lg:px-28 max-md:px-9 max-sm:px-3 place-items-center grid">
			<HeadTitle title="Anime" />
			<HomeSectionLayout contactTitle title="ANIME" id="anime" width="w-full max-xl:w-full">
				<div className="grid gap-1 mt-2 place-content-center grid-cols-[repeat(auto-fill,11rem)] max-sm:grid-cols-[repeat(auto-fill,8rem)]">
					{anime.map((an, key) => (
						<AnimeCard key={key} index={key} anime={an} />
					))}
				</div>
			</HomeSectionLayout>
		</div>
	);
};

export default AnimeComp;
