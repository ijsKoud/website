import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import type { GitHubRepoData } from "../../lib/types";

const GitHubStats = () => {
	const [stats, setStats] = useState<GitHubRepoData>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const { cancel, token: cancelToken } = axios.CancelToken.source();
		axios
			.get<GitHubRepoData>("https://api.github.com/repos/ijsKoud/website", { cancelToken })
			.then((res) => setStats(res.data))
			.then(() => setLoading(false))
			.catch(() => setLoading(false));

		return () => cancel();
	}, []);

	return (
		<Link href="https://ijskoud.dev/github/website" target="_blank" className="flex gap-4 hover:text-primary transition-colors">
			<p className="text-sm font-bold">
				<i className="fa-solid fa-code-fork" /> {loading ? "·" : stats?.forks_count ?? 0}
			</p>
			<p className="text-sm font-bold">
				<i className="fa-solid fa-star" /> {loading ? "·" : stats?.stargazers_count ?? 0}
			</p>
		</Link>
	);
};

export default GitHubStats;
