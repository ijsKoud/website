import Markdown from "@website/markdown";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import { SlideFade } from "../Animations";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: ["800", "600"] });

interface Props {
	name: string;
	description: string;
	image: string;
	urls: { url: string; icon: string }[];
}

export const ProjectCard: React.FC<Props> = ({ name, description, urls, image }) => {
	return (
		<SlideFade useInView>
			<article className="w-[512px] bg-zinc-200 border-zinc-300 dark:bg-background-alt dark:border-background border rounded-xl overflow-hidden hover:scale-[1.01] transition-transform">
				<Image src={image} alt={`${name} preview`} height={242} width={512} quality={100} />
				<div className="px-4 py-2">
					<div className="flex items-center justify-between">
						<h1 className="text-6 font-semibold" style={inter.style}>
							{name}
						</h1>
						<div className="flex items-center gap-x-3">
							{urls.slice(0, 4).map((url, key) => (
								<Link key={key} href={url.url} target="_blank" className="hover:text-primary transition-colors">
									<i className={url.icon} style={{ fontSize: 20 }} />
								</Link>
							))}
						</div>
					</div>
					<Markdown className="text-4sa">{description}</Markdown>
				</div>
			</article>
		</SlideFade>
	);
};
