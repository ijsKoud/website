/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ijskoud.dev/",
	generateRobotsTxt: true,
	additionalPaths: () => {
		const paths = ["github", "discord", "paypal", "twitter", "linkedin"];
		return paths.map((path) => ({ loc: `/${path}`, priority: 0.7, changefreq: "daily", lastmod: new Date().toISOString() }));
	},
	exclude: ["/api/*"]
};
