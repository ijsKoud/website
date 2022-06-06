import { useState } from "react";
import type { FC } from "../../lib/types";
import IconButton from "../IconButton";
import Modal from "../Modal";
import AboutCard from "./AboutCard";

interface Props {
	item: AboutItem;
}

interface AboutItem {
	title: string;
	colours: string[];
	banner: string;
	description: {
		small: string;
		large: string;
	};
	dates: {
		start: string;
		end?: string;
	};
}

const AboutListItem: FC<Props> = ({ item }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<>
			<Modal onClick={closeModal} isOpen={modalOpen}>
				<div className="about-modal">
					<div className="about-modal-top">
						<h1 className="about-modal-title">{item.title}</h1>
						<IconButton className="about-modal-close" icon="fa-solid fa-times" type="button" style="string" onClick={closeModal} />
					</div>
					<div className="about-modal-image">
						<img src={item.banner} alt={item.title} />
					</div>
					<div>
						<p className="about-modal-description">{item.description.large}</p>
						<p className="about-modal-date">{item.dates.end ? `${item.dates.start} - ${item.dates.end}` : item.dates.start}</p>
					</div>
				</div>
			</Modal>
			<AboutCard
				title={item.title}
				description={item.description.small}
				startDate={item.dates.start}
				endDate={item.dates.end}
				colours={item.colours}
				onClick={openModal}
			/>
		</>
	);
};

export default AboutListItem;
