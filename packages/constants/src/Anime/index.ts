import type { Variants } from "framer-motion";

export interface AnimeAPIResponse {
	list: AnimeAPIListEntry[];
	username: string;
}

export interface AnimeAPIListEntry {
	title: string;
	title_english: string;
	genres: string[];
	rating: number;
	status: number;
	episodes: AnimeAPIEpisodes;
	image: string;
	url: string;
	banner: string;
}

export interface AnimeAPIEpisodes {
	watched: number;
	total: number;
}

export enum AnimeStatus {
	WATCHING,
	COMPLETED,
	ON_HOLD,
	DROPPED,
	PLAN_TO_WATCH = 5 // API doesn't return 4 when marked as "Planned to watch", it returns 5
}

export const ANIME_API_URL = "https://api.ijskoud.dev/anime/stats";

/**
 * Returns a FadeIn animation with a delay of `0.5 * key`
 * @param key The position of the item in the array
 * @returns Framer-motion variants
 */
export const FadeInAnimationKey = (key: number): Variants => ({
	initial: {
		opacity: 0,
		transform: "translateY(1rem)"
	},
	inView: {
		opacity: 1,
		transform: "translateY(0rem)",
		transition: {
			duration: 0.5,
			delay: 0.05 * key,
			ease: [0.6, 0, 0.17, 1]
		}
	}
});
