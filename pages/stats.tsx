import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";
import GitHubCalendar from "react-github-calendar";
import PinnedRepos from "../components/PinnedRepos";

const Stats: NextPageWithLanyard = () => {
	return (
		<Page>
			<PinnedRepos />
			<h1>Commit Graph</h1>
			<GitHubCalendar username="DaanGamesDG" style={{ marginBottom: "2rem" }} />
		</Page>
	);
};

export default Stats;
