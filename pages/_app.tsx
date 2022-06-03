import "../styles/index.scss";
import "tippy.js/dist/tippy.css";

import type { AppProps } from "next/app";
import { useLanyard } from "../lib/hooks/Lanyard/UseLanyard";
import type { UseLanyardResults } from "../lib/hooks/Lanyard/types";
import { Navbar } from "../components";

const App = ({ Component, pageProps }: AppProps<{ lanyard: UseLanyardResults }>) => {
	const lanyard = useLanyard({ userId: "304986851310043136" });

	return (
		<>
			<Navbar lanyard={lanyard} />
			<Component {...pageProps} lanyard={lanyard} />
		</>
	);
};

export default App;
