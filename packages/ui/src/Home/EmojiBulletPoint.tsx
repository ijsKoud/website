import React from "react";
import { parse } from "twemoji-parser";

interface Props {
	emoji: string;
	text: string;
}

export const EmojiBulletPoint: React.FC<Props> = ({ text, emoji }) => {
	const twemoji = parse(emoji, { assetType: "svg" })[0];

	return (
		<div className="flex items-center gap-5">
			<img className="h-10" alt={emoji} src={twemoji.url} />
			<h4 className="text-10 text-light-gray">{text}</h4>
		</div>
	);
};
