import axios from "axios";
import React, { useEffect, useState } from "react";
import type { FC, WakaTimeApiResult } from "../../../lib/types";
import WakaTimeChart from "./WakaTimeChart";
import WakaTimeSkeleton from "./WakaTimeSkeleton";

const WakaTimeStats: FC = () => {
	const [stats, setStats] = useState<WakaTimeApiResult>();

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<WakaTimeApiResult>("/api/wakatime", { cancelToken: token })
			.then((data) => setStats(data.data))
			.catch(() => void 0);

		return () => cancel();
	}, []);

	return (
		<div>
			<h1>WakaTime Stats</h1>
			{stats ? <WakaTimeChart stats={stats} /> : <WakaTimeSkeleton />}
		</div>
	);
};

export default WakaTimeStats;
