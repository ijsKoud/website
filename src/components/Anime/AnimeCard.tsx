import React, { useState } from "react";
import type { Anime } from "../../lib/types";
import { motion } from "framer-motion";
import { FadeInAnimationKey } from "../animations/general";
import Modal from "../Modal";
import AnimeModal from "./AnimeModal";

interface Props {
	anime: Anime;
	index: number;
}

const AnimeCard: React.FC<Props> = ({ anime, index }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const closeModal = () => setModalOpen(false);
	const openModal = () => setModalOpen(true);

	return (
		<>
			<Modal isOpen={modalOpen} onClick={closeModal}>
				<AnimeModal {...anime} />
			</Modal>
			<motion.button onClick={openModal} variants={FadeInAnimationKey(index)} initial="initial" animate="inView" className="relative">
				<div className="w-44 h-full rounded-lg max-sm:w-32 bg-primary-500 absolute z-10 top-0 opacity-0 hover:opacity-100 transition-opacity px-2 py-2 flex flex-col justify-center">
					<h3 className="text-white text-base font-bold leading-5 text-left">{anime.title}</h3>
					<p className="text-white text-base leading-5 text-left">{anime.genres.join(" • ")}</p>
				</div>
				<img alt={anime.title} src={anime.image} className="w-44 rounded-lg max-sm:w-32" loading="lazy" />
			</motion.button>
		</>
	);
};

export default AnimeCard;
