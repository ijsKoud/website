import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { WAKATIME_STATS_API } from "../../lib/constants";
import type { WakaTimeApiResult, WakaTimeStatsAPIResponse } from "../../lib/types";

const WakaTime = async (req: NextApiRequest, res: NextApiResponse<WakaTimeApiResult>) => {
	const data = await axios.get<WakaTimeStatsAPIResponse>(WAKATIME_STATS_API, {
		headers: {
			Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY ?? "").toString("base64")}`
		}
	});

	res.json({
		languages: data.data.data.languages.map((cat) => ({ name: cat.name, percent: cat.percent, total_seconds: cat.total_seconds })),
		total_seconds: data.data.data.total_seconds
	});
};

export default WakaTime;
