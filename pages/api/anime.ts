import type { NextApiRequest, NextApiResponse } from "next";
import type { AnimeList, AnimeListRaw, AnimeApiResponse, KistuAnimeAPIResponse } from "../../lib/types";
import axios from "axios";

const Anime = async (req: NextApiRequest, res: NextApiResponse<AnimeApiResponse>) => {
	const response = await axios.get<AnimeListRaw[]>(`https://myanimelist.net/animelist/DaanGamesDG/load.json?status=7&offset=0`).catch(() => null);
	if (!response) return res.status(200).json({ list: [], username: "DaanGamesDG" });

	const { data } = response;
	const list = await Promise.all(
		data.map<Promise<AnimeList>>(async (anime) => {
			const kitsu = await axios
				.get<KistuAnimeAPIResponse>(`https://kitsu.io/api/edge/anime?filter%5Btext%5D=${encodeURIComponent(anime.anime_title)}`)
				.catch(() => null);

			const coverImage = kitsu?.data.data[0].attributes.coverImage?.tiny;

			return {
				title: anime.anime_title,
				title_english: anime.anime_title_eng,
				genres: anime.genres.map((genre) => genre.name.toLowerCase()),
				rating: anime.score,
				status: anime.status,
				episodes: {
					watched: anime.num_watched_episodes,
					total: anime.anime_num_episodes
				},
				image: anime.anime_image_path,
				cover_image: coverImage,
				url: `https://myanimelist.net${anime.anime_url}`
			};
		})
	);

	return res.status(200).json({ list, username: "DaanGamesDG" });
};

export default Anime;
