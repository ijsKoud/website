import axios from "axios";
import type { GetServerSideProps } from "next";
import React from "react";
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
		<div className="min-h-screen px-40 -mt-24 max-lg:px-28 max-md:px-9 max-sm:px-3 place-items-center grid">
			<HomeSectionLayout title="ANIME" id="anime" width="w-4/5"></HomeSectionLayout>
		</div>
	);
};

export default AnimeComp;
