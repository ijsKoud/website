import "../styles/index.scss";
import type { AppProps } from "next/app";
import { useLanyard } from "../lib/hooks/Lanyard/UseLanyard";
import type { UseLanyardResults } from "../lib/hooks/Lanyard/types";

const App = ({ Component, pageProps }: AppProps<{ lanyard: UseLanyardResults }>) => {
	const lanyard = useLanyard({ userId: "304986851310043136" });

	return <Component {...pageProps} lanyard={lanyard} />;
};

export default App;
