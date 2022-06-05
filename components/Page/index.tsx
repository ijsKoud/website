import type { FC } from "../../lib/types";

interface Props {
	className?: string;
}

const Page: FC<Props> = ({ children, className }) => {
	return (
		<div className={`page-wrapper ${className ?? ""}`}>
			<div className="page-container">{children}</div>
		</div>
	);
};

export default Page;
