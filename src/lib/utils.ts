import axios from "axios";
import type { Emoji } from "./hooks/Lanyard/types";
import type { KistuAnimeAPIResponse } from "./types";

export const getStatusColor = (status: "dnd" | "offline" | "idle" | "online" | "streaming") => {
	switch (status) {
		case "dnd":
			return "#ED4245";
		case "idle":
			return "#FAA81A";
		case "online":
			return "#3BA55D";
		case "offline":
			return "#747F8D";
		case "streaming":
			return "#6b03fc";
		default:
			return "#747F8D";
	}
};

export const getAvatar = (hash: string, id: string, size = 1024): string => {
	const animated = hash.startsWith("a_");
	return `https://cdn.discordapp.com/avatars/${id}/${hash}.${animated ? "gif" : "png"}?size=${size}`;
};

export const getEmojiString = (emoji: Emoji | undefined): string => {
	if (!emoji) return "";
	if (!emoji.id) return emoji.name;

	return `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`;
};

export const getKitsuCoverImage = async (anime: string): Promise<string | undefined> => {
	try {
		const res = await axios.get<KistuAnimeAPIResponse>(`https://kitsu.io/api/edge/anime?filter%5Btext%5D=${encodeURIComponent(anime)}`);
		return res.data.data[0].attributes.coverImage?.tiny;
	} catch (err) {
		console.error(err);
		return undefined;
	}
};
