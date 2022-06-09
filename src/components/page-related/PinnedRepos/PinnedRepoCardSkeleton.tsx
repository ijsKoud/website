import Skeleton from "react-loading-skeleton";
import type { FC } from "../../../lib/types";

const PinnedRepoCardSkeleton: FC = () => {
	return (
		<div className="pinned-repo-container">
			<div>
				<Skeleton
					className="pinned-repo-title"
					baseColor="#27292b"
					highlightColor="#101111"
					borderRadius={10}
					height={25}
					style={{ marginBottom: "20px" }}
				/>
				<Skeleton className="pinned-repo-desc" baseColor="#27292b" highlightColor="#101111" borderRadius={10} width={70} />
				<Skeleton className="pinned-repo-desc" baseColor="#27292b" highlightColor="#101111" borderRadius={10} width={150} />
				<Skeleton className="pinned-repo-desc" baseColor="#27292b" highlightColor="#101111" borderRadius={10} width={110} />
			</div>
			<div className="pinned-repo-stats">
				<p style={{ display: "flex", alignItems: "center" }}>
					<i className="fa-solid fa-star" style={{ marginRight: "10px" }} />{" "}
					<Skeleton baseColor="#27292b" highlightColor="#101111" borderRadius={10} width={25} />
				</p>
				<p style={{ display: "flex", alignItems: "center" }}>
					<i className="fa-solid fa-code-fork" style={{ marginRight: "10px" }} />{" "}
					<Skeleton baseColor="#27292b" highlightColor="#101111" borderRadius={10} width={25} />
				</p>
			</div>
		</div>
	);
};

export default PinnedRepoCardSkeleton;
