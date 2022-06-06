import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";
import GitHubCalendar from "react-github-calendar";
import PinnedRepos from "../components/PinnedRepos";

const Stats: NextPageWithLanyard = () => {
	return (
		<Page>
			<PinnedRepos />
			<GitHubCalendar username="DaanGamesDG" />
		</Page>
	);
};

export default Stats;
