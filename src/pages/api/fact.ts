import type { NextApiRequest, NextApiResponse } from "next";
import facts from "../../../assets/facts.json";

const sources = [
	"http://www.djtech.net/humor/useless_facts.htm",
	"http://laughbreak.com/lists/useless-facts/",
	"http://laughbreak.com/lists/useless-facts-2/",
	"https://github.com/vadimdemedes/cat-facts/blob/master/cat-facts.json"
];

const Facts = (req: NextApiRequest, res: NextApiResponse) => {
	const parseQuery = (data: string | string[]): string => (typeof data === "string" ? data : data[0]);
	const parseBool = (str: string) => (str.toLowerCase() === "true" ? true : false);

	const all = req.query.all ? parseBool(parseQuery(req.query.all)) : false;
	if (all) return res.status(200).json({ sources, facts });

	return res.status(200).send(facts[Math.floor(Math.random() * facts.length)]);
};

export default Facts;
