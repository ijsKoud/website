/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ijskoud.dev/",
	generateRobotsTxt: true,
	additionalPaths: () => {
		return [
			{
				loc: "/github"
			},
			{
				loc: "/discord"
			},
			{
				loc: "/paypal"
			},
			{
				loc: "/twitter"
			},
			{
				loc: "/linkedin"
			}
		];
	},
	exclude: ["/api/*"]
};
