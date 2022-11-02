import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider enableSystem enableColorScheme attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
