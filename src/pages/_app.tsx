import "../styles/globals.css";
import "nprogress/nprogress.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Layout from "../components/Layout";
import Cursor from "../components/Cursor";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
	const { route, events } = useRouter();
	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		events.on("routeChangeStart", handleRouteStart);
		events.on("routeChangeComplete", handleRouteDone);
		events.on("routeChangeError", handleRouteDone);

		return () => {
			events.off("routeChangeStart", handleRouteStart);
			events.off("routeChangeComplete", handleRouteDone);
			events.off("routeChangeError", handleRouteDone);
		};
	}, []);

	return (
		<ThemeProvider enableSystem enableColorScheme attribute="class">
			<Head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#4E9ED7" />
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#4E9ED7" />
				<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
				<meta name="theme-color" content="#4E9ED7" />

				<meta property="og:title" content="Daan Klarenbeek" />
				<meta property="og:type" content="site" />
				<meta property="og:description" content="Full-stack developer building apps for the internet." />
			</Head>
			<Layout>
				<AnimatePresence mode="wait">
					<motion.div key={route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<Component {...pageProps} />
					</motion.div>
				</AnimatePresence>
			</Layout>
			<Cursor />
		</ThemeProvider>
	);
};

export default App;
