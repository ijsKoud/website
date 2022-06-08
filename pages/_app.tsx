import "../styles/index.scss";
import "tippy.js/dist/tippy.css";
import "react-loading-skeleton/dist/skeleton.css";

import type { AppProps } from "next/app";
import { useLanyard } from "../lib/hooks/Lanyard/UseLanyard";
import type { UseLanyardResults } from "../lib/hooks/Lanyard/types";
import { Navbar, Footer } from "../components";
import Head from "next/head";
import PageTransition from "../components/PageTransition";
import config from "../config.json";

const App = ({ Component, pageProps }: AppProps<{ lanyard: UseLanyardResults }>) => {
	const lanyard = useLanyard({ userId: config.discord });

	return (
		<>
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color={config.meta.theme_color} />
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<meta name="msapplication-TileColor" content={config.meta.theme_color} />
				<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
				<meta name="theme-color" content={config.meta.theme_color} />

				<meta property="og:title" content={config.meta.title} />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://daangamesdg.xyz/" />
				<meta property="og:description" content={config.meta.description} />
			</Head>
			<Navbar lanyard={lanyard} />
			<PageTransition>
				<Component {...pageProps} lanyard={lanyard} />
			</PageTransition>
			<Footer lanyard={lanyard} />
		</>
	);
};

export default App;
