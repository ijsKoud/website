import { AnimeStatus, type AnimeAPIListEntry } from "@website/constants";
import Link from "next/link";
import React from "react";
import { inter, nunito } from "../Fonts";

const AnimeModal: React.FC<AnimeAPIListEntry> = (anime) => {
	const banner = anime.banner || "/assets/images/transparent.png";

	return (
		<div className="max-w-[840px]">
			<Link href={anime.url} target="_blank" className="text-8 hover:text-primary transition-colors mr-8" style={inter.style}>
				<i className="fa-solid fa-arrow-up-right-from-square mr-2" />
				{anime.title}
			</Link>
			<img alt="anime banner" src={banner} className="rounded-md object-cover h-[200px] bg-light-gray dark:bg-black" />
			<table className="text-5 max-sm:text-4 w-full my-4" style={nunito.style}>
				<tbody className="w-full">
					<tr>
						<td className="text-dark-gray dark:text-light-gray">Genres:</td>
						<td className="capitalize">{anime.genres.join(" ∙ ")}</td>
					</tr>
					<tr>
						<td className="text-dark-gray dark:text-light-gray">Status:</td>
						<td className="capitalize">{AnimeStatus[anime.status].toLowerCase().replaceAll("_", " ")}</td>
					</tr>
					<tr>
						<td className="text-dark-gray dark:text-light-gray">Rating:</td>
						<td>{anime.rating}/10</td>
					</tr>
					<tr>
						<td className="text-dark-gray dark:text-light-gray">Watched Eps:</td>
						<td>{anime.episodes.watched}</td>
					</tr>
					<tr>
						<td className="text-dark-gray dark:text-light-gray">Total Eps:</td>
						<td>{anime.episodes.total}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default AnimeModal;
