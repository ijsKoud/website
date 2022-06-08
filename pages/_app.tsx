import "../styles/index.scss";
import "tippy.js/dist/tippy.css";
import "react-loading-skeleton/dist/skeleton.css";

import type { AppProps } from "next/app";
import { useLanyard } from "../lib/hooks/Lanyard/UseLanyard";
import type { UseLanyardResults } from "../lib/hooks/Lanyard/types";
import { Navbar, Footer } from "../components";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps<{ lanyard: UseLanyardResults }>) => {
	const lanyard = useLanyard({ userId: "304986851310043136" });

	return (
		<>
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#333333" />
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#333333" />
				<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
				<meta name="theme-color" content="#333333" />

				<meta property="og:title" content="DaanGamesDG" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://daangamesdg.xyz/" />
				<meta property="og:description" content="16 year-old anime lover and full-stack developer from the Netherlands 🇳🇱." />
			</Head>
			<Navbar lanyard={lanyard} />
			<Component {...pageProps} lanyard={lanyard} />
			<Footer lanyard={lanyard} />
		</>
	);
};

export default App;
