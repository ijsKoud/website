import "../styles/globals.css";
import "nprogress/nprogress.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Layout from "../components/Layout";
import Cursor from "../components/Cursor";
import { Router } from "next/router";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on("routeChangeStart", handleRouteStart);
		Router.events.on("routeChangeComplete", handleRouteDone);
		Router.events.on("routeChangeError", handleRouteDone);

		return () => {
			Router.events.off("routeChangeStart", handleRouteStart);
			Router.events.off("routeChangeComplete", handleRouteDone);
			Router.events.off("routeChangeError", handleRouteDone);
		};
	}, []);

	return (
		<ThemeProvider enableSystem enableColorScheme attribute="class">
			<Layout>
				<AnimatePresence>
					<Component {...pageProps} />
				</AnimatePresence>
			</Layout>
			<Cursor />
		</ThemeProvider>
	);
};

export default App;
