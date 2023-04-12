import { statusCodes } from "@website/constants";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

export interface ErrorProps {
	statusCode: number;
	title?: string;
	withDarkMode?: boolean;
}

interface PageProps {
	statusCode: number;
}

const Error: NextPage<PageProps> = ({ statusCode }) => {
	const title = statusCodes[statusCode] || "An unexpected error has occurred";
	const pageTitle = statusCode ? `${statusCode}: ${title}` : "Application error: a client-side exception has occurred";
	const errorMessage = statusCode
		? title
		: "Application error: a client-side exception has occurred (see the browser console for more information)";

	return (
		<div className="h-screen text-center flex flex-col items-center justify-center">
			<NextSeo defaultTitle={pageTitle} />
			<main>
				{statusCode && (
					<h1 className="text-8 pr-6 mr-4 font-bold inline-block border-r-[1px] border-white-300 dark:border-[rgba(255,255,255,0.3)]">
						{statusCode}
					</h1>
				)}
				<div className="inline-block">
					<h2 className="text-5 font-medium m-0 text-center">{errorMessage}.</h2>
				</div>
			</main>
		</div>
	);
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode! : 404;
	return { statusCode };
};

export default Error;
