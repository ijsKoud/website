import axios from "axios";
import type { GetServerSideProps } from "next";
import React from "react";
import AnimeCard from "../components/Anime/AnimeCard";
import HomeSectionLayout from "../components/HomeSectionLayout";
import type { Anime, AnimeApiResponse } from "../lib/types";

export const getServerSideProps: GetServerSideProps = async () => {
	const req = await axios.get<AnimeApiResponse>("https://api.ijskoud.dev/anime/stats");

	return {
		props: {
			anime: req.data.list
		}
	};
};

interface Props {
	anime: Anime[];
}

const AnimeComp: React.FC<Props> = ({ anime }) => {
	return (
		<div className="min-h-screen w-full mt-6 px-40 max-lg:px-28 max-md:px-9 max-sm:px-3 place-items-center grid">
			<HomeSectionLayout contactTitle title="ANIME" id="anime" width="w-full max-xl:w-full">
				<div className="grid gap-1 mt-2 place-content-center grid-cols-[repeat(auto-fill,11rem)] max-sm:grid-cols-[repeat(auto-fill,8rem)]">
					{anime.map((an, key) => (
						<AnimeCard key={key} {...an} />
					))}
				</div>
			</HomeSectionLayout>
		</div>
	);
};

export default AnimeComp;
