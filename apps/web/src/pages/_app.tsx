import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Navbar from "@website/navbar";
import Footer from "@website/footer";
import { DefaultSeo } from "next-seo";
import config from "../../next-seo.config";
import { nunito } from "@website/ui";
import { FirebaseProvider } from "@website/firebase";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [theme, setTheme] = useState("dark");
	const { theme: _theme } = useTheme();

	useEffect(() => {
		if (_theme) setTheme(_theme);
	}, [_theme]);

	return (
		<div className={nunito.className}>
			<DefaultSeo {...config} />
			<FirebaseProvider>
				<ThemeProvider enableSystem enableColorScheme attribute="class">
					<Navbar />
					<Component {...pageProps} />
					<ToastContainer theme={theme as "dark" | "light"} toastClassName="dark:bg-background-alt bg-zinc-200" toastStyle={nunito.style} />
					<Footer />
				</ThemeProvider>
			</FirebaseProvider>
			<Analytics />
		</div>
	);
};

export default App;
