import Link from "next/link";
import type { FC } from "../../lib/types";

interface PropsButton {
	className?: string;
	title?: string;
	icon: string;
	style: "main" | "secondary-nav" | "secondary" | "danger" | "string" | "transparent" | "black";

	type: "button";
	onClick: () => void;
}

interface PropsLink {
	className?: string;
	title?: string;
	icon: string;
	style: "main" | "secondary-nav" | "secondary" | "danger" | "string" | "transparent" | "black";

	type: "link";
	path: string;
	onClick?: () => void;
}

type Props = { type: "link" | "button" } & (PropsButton | PropsLink);

const IconButton: FC<Props> = (props) => {
	const { style, title, type, onClick, icon, className: _className } = props;
	const className = `button button-${style} ${_className ?? ""}`;

	return type === "button" ? (
		<button className={className} onClick={onClick}>
			<i className={icon} /> {Boolean(title) && title}
		</button>
	) : (
		<Link href={props.path}>
			<a onClick={onClick} className={className}>
				<i className={icon} /> {Boolean(title) && title}
			</a>
		</Link>
	);
};

export default IconButton;
