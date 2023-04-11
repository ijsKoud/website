import { ANIME_API_URL, type AnimeAPIResponse } from "@website/constants";
import { PageLayout, PageSection, SlideFade, GridIllustration, inter, AnimeCard } from "@website/ui";
import axios from "axios";
import Fuse from "fuse.js";
import type { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import React, { useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
	const animeApiResponse = await axios.get<AnimeAPIResponse>(ANIME_API_URL);
	return {
		props: {
			list: animeApiResponse.data.list
		}
	};
};

interface Props {
	list: AnimeAPIResponse["list"];
}

const Anime: NextPage<Props> = ({ list }) => {
	const [anime, setAnime] = useState(list);
	const onSearchChange = (ctx: React.ChangeEvent<HTMLInputElement>) => {
		const input = ctx.currentTarget.value.trim();
		if (!input) {
			setAnime(list);
			return;
		}

		const fuse = new Fuse(list, { keys: ["title", "title_english"], isCaseSensitive: false, threshold: 0.2 });
		const results = fuse.search(input).map((result) => result.item);
		setAnime(results);
	};

	return (
		<PageLayout className="min-h-screen flex flex-col gap-y-52 pt-28">
			<NextSeo title="anime" />
			<PageSection className="items-center">
				<div className="flex flex-col gap-y-4 relative">
					<SlideFade useInView className="w-full flex flex-col items-center justify-center">
						<GridIllustration className="top-0 left-1/2 -translate-x-44 -translate-y-11 h-28" />
						<h1 className="text-16 leading-[80%] w-fit max-lg:text-14 max-sm:text-12 max-[400px]:text-10" style={inter.style}>
							Anime
						</h1>
						<div className="relative">
							<i aria-hidden className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 translate-y-0.5" />
							<input
								onChange={onSearchChange}
								type="search"
								placeholder="Search for anime..."
								className="rounded-lg p-2 bg-zinc-100 dark:bg-black w-64 mt-5"
							/>
						</div>
					</SlideFade>
					<div className="flex flex-wrap justify-center gap-4 mt-8">
						{anime.map((anime, key) => (
							<AnimeCard key={key} anime={anime} index={key} />
						))}
					</div>
				</div>
			</PageSection>
		</PageLayout>
	);
};

export default Anime;
