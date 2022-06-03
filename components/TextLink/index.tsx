import type { FC } from "../../lib/types";
import Link from "next/link";

interface Props {
	url: string;
	text: string;
	className?: string;
	external?: boolean;
}

export const TextLink: FC<Props> = ({ url, text, className, external }) => {
	return (
		<Link href={url}>
			<a className={className} target="_blank" rel="noopener noreferrer">
				{text} {external && <i className="fa-solid fa-arrow-up-right-from-square" />}
			</a>
		</Link>
	);
};
