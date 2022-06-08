import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";
import GitHubCalendar from "react-github-calendar";
import PinnedRepos from "../components/PinnedRepos";
import WakaTimeStats from "../components/WakaTimeStats";
import Title from "../components/Title";
import config from "../config.json";

const Stats: NextPageWithLanyard = () => {
	return (
		<Page>
			<Title title="Stats" />
			<PinnedRepos />
			<WakaTimeStats />
			<h1>Commit Graph</h1>
			<GitHubCalendar username={config.github} style={{ marginBottom: "2rem" }} />
		</Page>
	);
};

export default Stats;
