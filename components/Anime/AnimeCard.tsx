import Image from "next/image";
import type { FC } from "../../lib/types";

interface Props {
	image: string;
	title: string;
	onClick: () => void;
}

const AnimeCard: FC<Props> = ({ image, title, onClick }) => {
	return (
		<div className="anime-card" onClick={onClick}>
			<Image className="anime-card-image" src={image} alt={title} loading="lazy" width={210} height={300} />
			<div className="anime-card-title-wrapper">
				<p className="anime-card-title">{title}</p>
			</div>
		</div>
	);
};

export default AnimeCard;
