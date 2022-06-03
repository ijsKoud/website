import "tippy.js/dist/tippy.css";

import { Discord } from "../components";
import type { NextPageWithLanyard } from "../lib/types";

const Home: NextPageWithLanyard = ({ lanyard }) => {
	return (
		<main>
			<h1>Template</h1>
			<Discord lanyard={lanyard} />
		</main>
	);
};

export default Home;
