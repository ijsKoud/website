import Link from "next/link";
import React from "react";
import { parse } from "twemoji-parser";

interface Props {
	title: string;
	emoji: string;
	href?: string;
	onClick: () => void;
}

export const NavMenuLink: React.FC<Props> = ({ title, emoji, onClick, href }) => {
	const twemoji = parse(emoji, { assetType: "svg" })[0] || { url: "", text: emoji, indices: [], type: "emoji" };

	return (
		<li className="py-1">
			{href ? (
				<Link onClick={onClick} aria-label={`Go to ${title}`} className="text-5 flex items-center gap-2 font-semibold" href={href}>
					<img src={twemoji.url} alt={twemoji.text} className="h-8" />
					<p className="navlink relative">{title}</p>
				</Link>
			) : (
				<button aria-label={`Click on ${title} button`} onClick={onClick} className="text-5 flex items-center gap-2 font-semibold">
					<img src={twemoji.url} alt={twemoji.text} className="h-8" />
					<p className="navlink relative">{title}</p>
				</button>
			)}
		</li>
	);
};
