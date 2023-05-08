import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";

import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";
import Navbar from "@website/navbar";
import Footer from "@website/footer";
import { DefaultSeo } from "next-seo";
import config from "../../next-seo.config";
import { nunito } from "@website/ui";
import { FirebaseProvider } from "@website/firebase";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [theme, setTheme] = useState("dark");
	const { theme: _theme } = useTheme();

	useEffect(() => {
		if (_theme) setTheme(_theme);
	}, [_theme]);

	const { events } = useRouter();
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

	const AppComponent = Component as React.FC;

	return (
		<div className={nunito.className}>
			<DefaultSeo {...config} />
			<FirebaseProvider>
				<ThemeProvider enableSystem enableColorScheme attribute="class">
					<Navbar />
					<AppComponent {...pageProps} />
					<ToastContainer theme={theme as "dark" | "light"} toastClassName="dark:bg-background-alt bg-zinc-200" toastStyle={nunito.style} />
					<Footer />
				</ThemeProvider>
			</FirebaseProvider>
			<Analytics />
		</div>
	);
};

export default App;
