import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Nunito } from "next/font/google";
import Navbar from "@website/navbar";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<div className={nunito.className}>
			<ThemeProvider enableSystem enableColorScheme attribute="class">
				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
		</div>
	);
};

export default App;
