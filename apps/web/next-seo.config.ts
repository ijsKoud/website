import type { DefaultSeoProps } from "next-seo";
type SeoProps = Omit<DefaultSeoProps, "children">;

const config: SeoProps = {
	titleTemplate: "Daan Klarenbeek • %s",
	defaultTitle: "Daan Klarenbeek • Full-stack developer building apps for the internet",
	themeColor: "#50a0d4",
	dangerouslySetAllPagesToNoFollow: false,
	dangerouslySetAllPagesToNoIndex: false,
	description: "Full-stack developer building apps for the internet",
	twitter: { cardType: "summary" },
	openGraph: {
		title: "Daan Klarenbeek",
		description: "Full-stack developer building apps for the internet",
		images: [{ url: "/profile.png", alt: "Profile picture", type: "image/png" }]
	}
};

export default config;
