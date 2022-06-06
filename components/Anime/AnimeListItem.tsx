import { useEffect, useState } from "react";
import { AnimeList, AnimeStatus, FC } from "../../lib/types";
import { getKitsuCoverImage } from "../../lib/utils";
import Button from "../Button";
import IconButton from "../IconButton";
import Modal from "../Modal";
import AnimeCard from "./AnimeCard";
import Skeleton from "react-loading-skeleton";

interface Props {
	anime: AnimeList;
}

const AnimeListItem: FC<Props> = ({ anime }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const [loaded, setLoaded] = useState(false);
	const [coverImage, setCoverImage] = useState<string>();
	useEffect(() => {
		if (modalOpen && !loaded)
			void getKitsuCoverImage(anime.title).then((res) => {
				setCoverImage(res);
				setLoaded(true);
			});
	}, [modalOpen]);

	return (
		<>
			<Modal onClick={closeModal} isOpen={modalOpen}>
				<div className="anime-modal">
					<div className="anime-modal-top">
						<Button className="anime-modal-title" path={anime.url} style="string" title={anime.title} type="link" external />
						<IconButton className="anime-modal-close" icon="fa-solid fa-times" type="button" style="string" onClick={closeModal} />
					</div>
					<div className="anime-modal-image">
						{loaded ? (
							coverImage ? (
								<img src={coverImage} alt={anime.title} />
							) : (
								<Skeleton
									height={200}
									width="100%"
									baseColor="#232628"
									highlightColor="#1e2021"
									borderRadius={10}
									enableAnimation={false}
								/>
							)
						) : (
							<Skeleton height={200} width="100%" baseColor="#232628" highlightColor="#1e2021" borderRadius={10} />
						)}
					</div>
					<table className="anime-modal-stats-table">
						<tbody>
							<tr>
								<td className="anime-modal-table-title">Status:</td>
								<td style={{ textTransform: "capitalize" }}>{AnimeStatus[anime.status].toLowerCase().replace(/_/g, " ")}</td>
							</tr>
							<tr>
								<td className="anime-modal-table-title">Rating:</td>
								<td>{anime.rating}/10</td>
							</tr>
							<tr>
								<td className="anime-modal-table-title">Watched Eps:</td>
								<td>{anime.episodes.watched}</td>
							</tr>
							<tr>
								<td className="anime-modal-table-title">Total Eps:</td>
								<td>{anime.episodes.total}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Modal>
			<AnimeCard title={anime.title} image={anime.image} onClick={openModal} />
		</>
	);
};

export default AnimeListItem;
