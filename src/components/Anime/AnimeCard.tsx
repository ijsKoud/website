import React from "react";
import type { Anime } from "../../lib/types";
import { motion } from "framer-motion";
import { FadeInAnimationKey } from "../animations/general";

interface Props {
	anime: Anime;
	index: number;
}

const AnimeCard: React.FC<Props> = ({ anime, index }) => {
	return (
		<motion.div variants={FadeInAnimationKey(index)} initial="initial" animate="inView" className="relative">
			<div className="w-44 rounded-lg max-sm:w-32 bg-black-500 absolute z-10 top-0" />
			<img alt={anime.title} src={anime.image} className="w-44 rounded-lg max-sm:w-32" loading="lazy" />
		</motion.div>
	);
};

export default AnimeCard;
