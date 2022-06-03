import type { FC } from "../../lib/types";
import Link from "next/link";

interface Props {
	url: string;
	text: string;
	external?: boolean;
}

export const TextLink: FC<Props> = ({ url, text, external }) => {
	return (
		<Link href={url}>
			<a target="_blank" rel="noopener noreferrer">
				{text} {external && <i className="fa-solid fa-arrow-up-right-from-square" />}
			</a>
		</Link>
	);
};
