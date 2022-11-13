import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import type { AnimeApiResponse } from "../../lib/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = await axios.get<AnimeApiResponse>("https://api.ijskoud.dev/anime/stats").catch(() => ({ data: null }));
	res.send(data.data?.list ?? []);
}
