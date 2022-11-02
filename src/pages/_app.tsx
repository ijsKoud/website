import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Cursor from "../components/Cursor";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider enableSystem enableColorScheme attribute="class">
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Cursor />
		</ThemeProvider>
	);
};

export default App;
