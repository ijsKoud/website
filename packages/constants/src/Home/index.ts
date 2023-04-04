export const LANDING_TEXT = {
	title: "Hey my name is",
	name: "Daan Klarenbeek",
	subtitle: "**Full-stack** developer building apps for the internet."
} as const;

export const LANDING_BULLET_POINTS = [
	{
		text: "Fan of `open-source` projects.",
		emoji: "🚀"
	},
	{
		text: "Specializing in `web-based` applications.",
		emoji: "💻"
	}
] as const;

export const ABOUT_ME_TEXT =
	"Hey, I am Daan. A 16 year-old full-stack developer & anime lover from the Netherlands. Who knew that writing half-working chat bots by following a simple tutorial in 2020 would bring me here. I guess that that one tutorial decided my whole life.\n\nAnyway, fast-forward to today; I love programming and work on a series of projects, [maybe yours too](/#contact). I love open-source, hence why this website and many other projects are open to the public!\n\nI am still young which means plenty of time to grow and improve, below you can find a list of languages, tools and software which I use at a daily basis." as const;

export const ABOUT_ME_EXPERIENCE = {
	Languages: [
		{
			name: "JavaScript",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
		},
		{
			name: "TypeScript",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
		}
	],
	Toolbox: [
		{
			name: "React",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
		},
		{
			name: "Next.js",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
		},
		{
			name: "Yarn",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
		},
		{
			name: "Docker",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
		}
	],
	Platforms: [
		{
			name: "GitHub",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
		},
		{
			name: "Ubuntu",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
		},
		{
			name: "Figma",
			image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
		}
	]
} as const;
