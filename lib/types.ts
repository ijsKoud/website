/* eslint-disable @typescript-eslint/ban-types */
import type { NextPage } from "next";
import type React from "react";
import type { UseLanyardResults } from "./hooks/Lanyard/types";

/* === Component Types === */
export type FC<Props extends Record<string, any> = {}> = React.FC<Props & { children?: React.ReactNode }>;
export type FCWithLanyard<Props extends Record<string, any> = {}> = React.FC<Props & { children?: React.ReactNode; lanyard: UseLanyardResults }>;

export type NextPageWithLanyard<Props extends Record<string, any> = {}> = NextPage<Props & { lanyard: UseLanyardResults }>;

/* API(Anime): Types */
export enum AnimeStatus {
	WATCHING,
	COMPLETED,
	ON_HOLD,
	DROPPED,
	PLAN_WATCH = 5 // API doesn't return 4 when marked as "Planned to watch", it returns 5
}

export interface AnimeApiResponse {
	list: AnimeList[];
	username: string;
}

export interface AnimeListRaw {
	status: number;
	score: number;
	tags: string;
	is_rewatching: number;
	num_watched_episodes: number;
	anime_title: string;
	anime_title_eng: string;
	anime_num_episodes: number;
	anime_airing_status: number;
	anime_id: number;
	anime_studios: null;
	anime_licensors: null;
	anime_season: null;
	has_episode_video: boolean;
	has_promotion_video: boolean;
	has_video: boolean;
	video_url: string;
	anime_url: string;
	anime_image_path: string;
	is_added_to_list: boolean;
	anime_media_type_string: string;
	anime_mpaa_rating_string: string;
	start_date_string: null;
	finish_date_string: null;
	anime_start_date_string: string;
	anime_end_date_string: string;
	days_string: null;
	storage_string: string;
	priority_string: string;
	genres: {
		id: number;
		name: string;
	}[];
}

export interface AnimeList {
	title: string;
	title_english: string;
	genres: string[];

	rating: number;
	status: AnimeStatus;

	episodes: {
		watched: number;
		total: number;
	};

	url: string;
	image: string;
}
