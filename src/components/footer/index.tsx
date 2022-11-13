import Link from "next/link";
import React from "react";
import GitHubStats from "./GitHubStats";

const Footer = () => {
	return (
		<div className="min-h-7 px-40 -mt-28 max-lg:px-28 max-md:px-9 max-sm:px-3 max-sm:-mt-40">
			<div className="flex justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center">
				<div className="flex gap-2 text-sm">
					<Link className="hover:text-primary transition-colors" href="/discord">
						<i className="fa-brands fa-discord" />
					</Link>
					<Link className="hover:text-primary transition-colors" href="/github">
						<i className="fa-brands fa-github" />
					</Link>
					<Link className="hover:text-primary transition-colors" href="/twitter">
						<i className="fa-brands fa-twitter" />
					</Link>
					<Link className="hover:text-primary transition-colors" href="/paypal">
						<i className="fa-brands fa-paypal" />
					</Link>
					<Link className="hover:text-primary transition-colors" href="/kofi">
						<i className="fa-solid fa-mug-saucer" />
					</Link>
				</div>
				<GitHubStats />
				<p className="text-sm">
					<i className="fa-solid fa-code" /> with <i className="fa-solid fa-heart" /> by{" "}
					<Link className="hover:text-primary transition-colors" href="https://ijskoud.dev">
						ijsKoud
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Footer;
