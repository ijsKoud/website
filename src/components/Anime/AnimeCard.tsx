import React from "react";
import type { Anime } from "../../lib/types";

const AnimeCard: React.FC<Anime> = (anime) => {
	return (
		<div>
			<img alt={anime.title} src={anime.image} className="w-44 rounded-lg max-sm:w-32" loading="lazy" />
		</div>
	);
};

export default AnimeCard;
