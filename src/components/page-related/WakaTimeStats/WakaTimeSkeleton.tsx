import Skeleton from "react-loading-skeleton";
import type { FC } from "../../../lib/types";

const WakaTimeSkeleton: FC = () => {
	return (
		<div className="wakatime-skeleton">
			<Skeleton className="pinned-repo-desc" baseColor="#27292b" highlightColor="#101111" borderRadius={10} width={300} />
			<div className="wakatime-skeleton-chart">
				<div>
					{Array(5)
						.fill(null)
						.map((_, key) => (
							<Skeleton
								key={key}
								baseColor="#27292b"
								highlightColor="#101111"
								borderRadius={10}
								width={Math.floor(Math.random() * 1e2) + 5e1}
							/>
						))}
				</div>
				<Skeleton baseColor="#27292b" highlightColor="#101111" borderRadius={10} width={160} height={160} circle />
			</div>
		</div>
	);
};

export default WakaTimeSkeleton;
