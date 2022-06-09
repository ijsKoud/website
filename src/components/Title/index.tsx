import Head from "next/head";
import React from "react";
import type { FC } from "../../lib/types";
import config from "../../../config.json";

const Title: FC<{ title: string }> = ({ title }) => {
	return (
		<Head>
			<title>
				{config.meta.page_prefix}
				{title}
			</title>
		</Head>
	);
};

export default Title;
