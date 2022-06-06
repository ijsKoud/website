import type { FC } from "../../lib/types";
import AboutListItem from "./AboutListItem";

const AboutCards = [
	{
		title: "Bilingual Education",
		colours: ["#6EE7B7", "#3B82F6", "#9333EA"],
		banner: "https://cdn.discordapp.com/attachments/835619926667821117/983347041352704070/unknown.png",
		description: {
			small: "Finished 3 year bilingual education at the Mendel College.",
			large: "I finished my 3 years of bilingual education at the Mendel College, part of the TTO program I follow. The TTO program consists of 3 year bilingual education and the FCE and CAE certificate exam at the end of the 4th year (I have a total of 5 years)."
		},
		dates: {
			start: "3 September 2018",
			end: "10 July 2021"
		}
	},
	{
		title: "Cambridge Certificate",
		colours: ["#818CF8", "#D8B4FE"],
		banner: "https://cdn.discordapp.com/attachments/835619926667821117/983347974925074472/unknown.png",
		description: {
			small: "Passed the Cambridge B2 First exam.",
			large: "I passed the Cambridge B2 First exam with grade B. This is the second part of the TTO program I follow. The last step is to pass the CAE exam in July."
		},
		dates: {
			start: "13 November 2021"
		}
	}
];

const AboutList: FC = () => {
	return (
		<div className="about-list">
			{AboutCards.map((item) => (
				<AboutListItem key={item.title} item={item} />
			))}
		</div>
	);
};

export default AboutList;
