import type { FC } from "../../lib/types";
import AboutListItem from "./AboutListItem";
import config from "../../../config.json";

const AboutList: FC = () => {
	return (
		<div className="about-list">
			{config.pages.about.cards.map((item) => (
				<AboutListItem key={item.title} item={item} />
			))}
		</div>
	);
};

export default AboutList;
