import Link from "next/link";
import type { FC } from "../../lib/types";

interface PropsButton {
	title: string;
	style: "main" | "secondary-nav" | "secondary" | "danger" | "string" | "transparent" | "black";
	external?: boolean;

	type: "button";
	onClick: () => void;
}

interface PropsLink {
	title: string;
	style: "main" | "secondary-nav" | "secondary" | "danger" | "string" | "transparent" | "black";
	external?: boolean;

	type: "link";
	path: string;
	onClick?: () => void;
}

type Props = { type: "link" | "button" } & (PropsButton | PropsLink);

const Button: FC<Props> = (props) => {
	const { style, title, type, external, onClick } = props;
	const className = `button button-${style}`;

	return type === "button" ? (
		<button className={className} onClick={onClick}>
			{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
		</button>
	) : (
		<Link href={props.path}>
			<a onClick={onClick} className={className}>
				{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
			</a>
		</Link>
	);
};

export default Button;
