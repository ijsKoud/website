import { readdirSync } from "node:fs";
import { join } from "node:path";

const transpilePackages = readdirSync(join(process.cwd(), "..", "..", "packages")).map((pkg) => `@website/${pkg}`);

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: false,
	transpilePackages,
	images: {
		domains: ["cdn.ijskoud.dev"]
	},
	redirects: () => [
		{
			source: "/discord/banner",
			destination: "https://discord.com/api/guilds/828382957310967820/embed.png?style=banner2",
			permanent: true
		},
		{
			source: "/discord",
			destination: "https://discord.gg/6X2TZZ5Gjg",
			permanent: true
		},
		{
			source: "/github",
			destination: "https://github.com/ijsKoud",
			permanent: true
		},
		{
			source: "/github/:repo",
			destination: "https://github.com/ijsKoud/:repo",
			permanent: true
		},
		{
			source: "/paypal",
			destination: "https://paypal.me/DaanGamesDG",
			permanent: true
		},
		{
			source: "/kofi",
			destination: "https://ko-fi.com/ijsKoud",
			permanent: true
		},
		{
			source: "/twitter",
			destination: "https://twitter.com/ijs_Koud",
			permanent: true
		},
		{
			source: "/linkedin",
			destination: "https://www.linkedin.com/in/daan-klarenbeek/",
			permanent: true
		}
	]
};

export default config;
