import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="min-h-7 px-40 -mt-28 max-lg:px-28 max-md:px-9 max-sm:px-3">
			<div className="flex justify-between">
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
				<div className="flex gap-4">
					<p>
						<i className="fa-solid fa-code-fork" />
					</p>
					<p>
						<i className="fa-solid fa-star" />
					</p>
				</div>
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
