import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { Nunito } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Navbar from "@website/navbar";
import Footer from "@website/footer";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [theme, setTheme] = useState("dark");
	const { theme: _theme } = useTheme();

	useEffect(() => {
		if (_theme) setTheme(_theme);
	}, [_theme]);

	return (
		<div className={nunito.className}>
			<ThemeProvider enableSystem enableColorScheme attribute="class">
				<Navbar />
				<Component {...pageProps} />
				<ToastContainer theme={theme as "dark" | "light"} toastClassName="dark:bg-background-alt bg-zinc-200" toastStyle={nunito.style} />
				<Footer />
			</ThemeProvider>
		</div>
	);
};

export default App;
