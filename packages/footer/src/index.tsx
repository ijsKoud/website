import Link from "next/link";
import React from "react";
import GitHubStats from "./GitHubStats";

const Footer: React.FC = () => {
	return (
		<footer className="my-8 flex items-center justify-center gap-x-40 px-16 max-sm:gap-x-8">
			<GitHubStats />
			<div>
				<p className="text-4">
					<i className="fa-solid fa-code" /> with <i className="fa-solid fa-heart" /> by{" "}
					<Link className="hover:text-primary transition-colors" href="https://ijskoud.dev/">
						ijsKoud
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
