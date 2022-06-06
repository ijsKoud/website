import type { FC, PinnedRepoItem as iPinnedRepoItem } from "../../lib/types";
import Link from "next/link";

interface Props {
	repo: iPinnedRepoItem;
}

const PinnedRepoItem: FC<Props> = ({ repo }) => {
	return (
		<Link href={repo.link}>
			<div className="pinned-repo-container">
				<div>
					<h1 className="pinned-repo-title">
						{repo.owner}/{repo.repo}
					</h1>
					<p className="pinned-repo-desc">{repo.description}</p>
				</div>
				<div className="pinned-repo-stats">
					<p>
						<i className="fa-solid fa-star" /> {repo.stars}
					</p>
					<p>
						<i className="fa-solid fa-code-fork" /> {repo.forks}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default PinnedRepoItem;
