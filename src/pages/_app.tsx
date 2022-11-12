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
