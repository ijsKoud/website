import axios from "axios";
import { useEffect, useState } from "react";
import type { FC, PinnedRepoItem as iPinnedRepoItem } from "../../lib/types";
import PinnedRepoItem from "./PinnedRepoCard";
import PinnedRepoCardSkeleton from "./PinnedRepoCardSkeleton";

const PinnedRepos: FC = () => {
	const [pinned, setPinned] = useState<iPinnedRepoItem[]>([]);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<iPinnedRepoItem[]>("https://gh-pinned-repos.egoist.sh/?username=DaanGamesDG", { cancelToken: token })
			.then((data) => setPinned(data.data))
			.catch(() => void 0);

		return () => cancel();
	}, []);

	return (
		<div className="pinned-repo-list-container">
			<h1>Pinned Repositories</h1>
			<div className="pinned-repo-list">
				{pinned.length
					? pinned.map((pin, key) => <PinnedRepoItem key={key} repo={pin} />)
					: Array(6)
							.fill(null)
							.map((_, key) => <PinnedRepoCardSkeleton key={key} />)}
			</div>
		</div>
	);
};

export default PinnedRepos;
