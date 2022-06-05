import type { FC } from "../../lib/types";

interface Props {
	image: string;
	title: string;
	onClick: () => void;
}

const AnimeCard: FC<Props> = ({ image, title, onClick }) => {
	return (
		<div className="anime-card" onClick={onClick}>
			<img className="anime-card-image" src={image} alt={title} />
			<div className="anime-card-title-wrapper">
				<p className="anime-card-title">{title}</p>
			</div>
		</div>
	);
};

export default AnimeCard;
