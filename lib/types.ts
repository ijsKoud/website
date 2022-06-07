/* eslint-disable @typescript-eslint/ban-types */
import type { NextPage } from "next";
import type React from "react";
import type { UseLanyardResults } from "./hooks/Lanyard/types";

/* === Component Types === */
export type FC<Props extends Record<string, any> = {}> = React.FC<Props & { children?: React.ReactNode }>;
export type FCWithLanyard<Props extends Record<string, any> = {}> = React.FC<Props & { children?: React.ReactNode; lanyard: UseLanyardResults }>;

export type NextPageWithLanyard<Props extends Record<string, any> = {}> = NextPage<Props & { lanyard: UseLanyardResults }>;

/* === Stats Page Types === */
export interface PinnedRepoItem {
	owner: string;
	repo: string;
	link: string;
	description: string;
	image: string;
	website?: string;
	language: string;
	languageColor: string;
	stars: number | string;
	forks: number | string;
}

/* API(WakaTime): Types */
export interface WakaTimeApiResult {
	languages: WakatTimeApiResultLanguage[];
	total_seconds: number;
}

interface WakatTimeApiResultLanguage {
	total_seconds: number;
	name: string;
	percent: number;
}

export interface WakaTimeStatsAPIResponse {
	data: Data;
}

export interface Data {
	best_day: BestDay;
	categories: Category[];
	created_at: string;
	daily_average: number;
	daily_average_including_other_language: number;
	days_including_holidays: number;
	days_minus_holidays: number;
	dependencies: any[];
	editors: Category[];
	end: string;
	holidays: number;
	human_readable_daily_average: string;
	human_readable_daily_average_including_other_language: string;
	human_readable_range: string;
	human_readable_total: string;
	human_readable_total_including_other_language: string;
	id: string;
	is_already_updating: boolean;
	is_coding_activity_visible: boolean;
	is_including_today: boolean;
	is_other_usage_visible: boolean;
	is_stuck: boolean;
	is_up_to_date: boolean;
	languages: Category[];
	machines: Category[];
	modified_at: string;
	operating_systems: Category[];
	percent_calculated: number;
	project: null;
	projects: Category[];
	range: string;
	start: string;
	status: string;
	timeout: number;
	timezone: string;
	total_seconds: number;
	total_seconds_including_other_language: number;
	user_id: string;
	username: null;
	writes_only: boolean;
}

export interface BestDay {
	created_at: string;
	date: string;
	id: string;
	modified_at: null;
	text: string;
	total_seconds: number;
}

export interface Category {
	decimal: string;
	digital: string;
	hours: number;
	minutes: number;
	name: string;
	percent: number;
	text: string;
	total_seconds: number;
	machine?: Machine;
}

export interface Machine {
	created_at: string;
	id: string;
	ip: string;
	last_seen_at: string;
	name: string;
	timezone: string;
	value: string;
}

/* API(Anime): Types */
export enum AnimeStatus {
	WATCHING,
	COMPLETED,
	ON_HOLD,
	DROPPED,
	PLAN_TO_WATCH = 5 // API doesn't return 4 when marked as "Planned to watch", it returns 5
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

export interface KistuAnimeAPIResponse {
	data: KitsuAnimeItem[];
}

export interface KitsuAnimeItem {
	id: string;
	type: Type;
	links: DatumLinks;
	attributes: Attributes;
	relationships: { [key: string]: Relationship };
}

export interface Attributes {
	createdAt: string;
	updatedAt: string;
	slug: string;
	synopsis: string;
	description: string;
	coverImageTopOffset: number;
	titles: Titles;
	canonicalTitle: string;
	abbreviatedTitles: string[];
	averageRating: null | string;
	ratingFrequencies: { [key: string]: string };
	userCount: number;
	favoritesCount: number;
	startDate: string;
	endDate: string;
	nextRelease: null;
	popularityRank: number;
	ratingRank: number | null;
	ageRating: AgeRating;
	ageRatingGuide: AgeRatingGuide;
	subtype: string;
	status: Status;
	tba: null | string;
	posterImage: PosterImage;
	coverImage: CoverImage | null;
	episodeCount: number;
	episodeLength: number;
	totalLength: number;
	youtubeVideoId: null | string;
	showType: string;
	nsfw: boolean;
}

export enum AgeRating {
	PG = "PG"
}

export enum AgeRatingGuide {
	Teens13OrOlder = "Teens 13 or older"
}

export interface CoverImage {
	tiny: string;
	large: string;
	small: string;
	original: string;
	meta: CoverImageMeta;
}

export interface CoverImageMeta {
	dimensions: PurpleDimensions;
}

export interface PurpleDimensions {
	tiny: Large;
	large: Large;
	small: Large;
}

export interface Large {
	width: number | null;
	height: number | null;
}

export interface PosterImage {
	tiny: string;
	large: string;
	small: string;
	medium: string;
	original: string;
	meta: PosterImageMeta;
}

export interface PosterImageMeta {
	dimensions: FluffyDimensions;
}

export interface FluffyDimensions {
	tiny: Large;
	large: Large;
	small: Large;
	medium: Large;
}

export enum Status {
	Finished = "finished"
}

export interface Titles {
	en?: string;
	en_jp: string;
	en_us?: string;
	ja_jp: string;
}

export interface DatumLinks {
	self: string;
}

export interface Relationship {
	links: RelationshipLinks;
}

export interface RelationshipLinks {
	self: string;
	related: string;
}

export enum Type {
	Anime = "anime"
}
