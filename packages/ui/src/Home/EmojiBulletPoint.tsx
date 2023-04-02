import React from "react";
import { parse } from "twemoji-parser";

interface Props {
	emoji: string;
	text: string;
}

export const EmojiBulletPoint: React.FC<Props> = ({ text, emoji }) => {
	const twemoji = parse(emoji, { assetType: "svg" })[0];

	return (
		<div className="flex items-center gap-5 mt-4 max-md:gap-2">
			<img className="h-10 max-lg:h-8 max-md:h-6" alt={emoji} src={twemoji.url} />
			<h4 className="text-10 text-light-gray max-lg:text-8 max-sm:text-6 max-[400px]:text-4 leading-[95%]">{text}</h4>
		</div>
	);
};
