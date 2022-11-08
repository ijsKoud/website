import Link from "next/link";
import React from "react";
import HomeSectionLayout from "../HomeSectionLayout";

const Contact = () => {
	return (
		<HomeSectionLayout title="GET IN TOUCH" id="contact" width="w-3/5" contactTitle>
			<div className="flex flex-col gap-10 justify-center items-center text-base max-sm:text-sm">
				<p className="max-w-[80%] text-center max-sm:max-w-full">
					My inbox is always open. Whether you want to say hi, ask something or talk about new opportunities. I will try my best to reply to
					every mail I receive!
				</p>
				<div className="flex flex-col gap-2 justify-center items-center mt-4 text-base">
					<div className="flex items-center gap-4 justify-center text-base max-sm:flex-col max-sm:gap-0">
						<Link href="/github" className="flex gap-1 items-center hover:text-primary transition-colors">
							<i className="fa-brands fa-github" /> GitHub
						</Link>
						<Link href="/twitter" className="flex gap-1 items-center hover:text-primary transition-colors">
							<i className="fa-brands fa-twitter" /> Twitter
						</Link>
						<Link href="/discord" className="flex gap-1 items-center hover:text-primary transition-colors">
							<i className="fa-brands fa-discord" /> Discord
						</Link>
					</div>
					<Link
						href="mailto:hi@ijskoud.dev"
						className="text-center font-medium border-primary border-2 rounded-md px-4 py-2 text-primary hover:bg-primary-300 hover:text-black hover:dark:text-white transition-colors"
					>
						<i className="fa-regular fa-envelope" /> Say hello!
					</Link>
				</div>
			</div>
		</HomeSectionLayout>
	);
};

export default Contact;
