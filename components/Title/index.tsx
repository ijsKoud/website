import Head from "next/head";
import React from "react";
import type { FC } from "../../lib/types";

const Title: FC<{ title: string }> = ({ title }) => {
	return (
		<Head>
			<title>DaanGamesDG • {title}</title>
		</Head>
	);
};

export default Title;
