import { ABOUT_ME_EXPERIENCE } from "@website/constants";
import Link from "next/link";
import React from "react";

interface Props {
	id: string;
	style: Record<string, any>;
}

export const Experience: React.FC<Props> = ({ id, style }) => {
	const values = ABOUT_ME_EXPERIENCE[id as keyof typeof ABOUT_ME_EXPERIENCE];
	if (!values) return <></>;

	return (
		<div>
			<h2 className="text-6" style={style}>
				{id}
			</h2>
			<ul>
				{values.map((item, key) => (
					<li key={key} className="float-left mx-1 first:ml-0 last:mr-0">
						<Link href={item.url} target="_blank" aria-label={`Go to a ${item.name} related website`}>
							<img alt={item.name} className="h-14" src={item.image} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
