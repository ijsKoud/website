import { Html, Head, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
					integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
				<link rel="manifest" href="/site.webmanifest?v=2" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#131313" />
				<link rel="shortcut icon" href="/favicon.ico?v=2" />
				<meta name="msapplication-TileColor" content="#131313" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
