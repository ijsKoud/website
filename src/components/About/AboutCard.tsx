import type React from "react";
import type { FC } from "../../lib/types";

interface Props {
	title: string;
	description: string;
	startDate: string;
	endDate?: string;
	colours: string[];
	onClick: () => void;
}

const AboutCard: FC<Props> = ({ title, description, startDate, endDate, colours, onClick }) => {
	const style = { "--about-gradient-stops": colours.join(", ") } as React.CSSProperties;

	return (
		<div className="about-card-container" style={style} onClick={onClick}>
			<div className="about-card">
				<div>
					<h1 className="about-card-title">{title}</h1>
					<p className="about-card-desc">{description}</p>
				</div>
				<p className="about-card-date">{endDate ? `${startDate} - ${endDate}` : startDate}</p>
			</div>
		</div>
	);
};

export default AboutCard;
