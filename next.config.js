/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["cdn.myanimelist.net"]
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
		}
	]
};
