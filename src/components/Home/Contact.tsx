import Link from "next/link";
import React from "react";

const Contact = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen mb-48">
			<div className="flex flex-col w-3/5 max-xl:w-11/12">
				<div className="flex flex-col items-center w-full">
					<h3 id="contact" className="text-2xl font-extrabold max-sm:text-lg">
						CONTACT ME
					</h3>
				</div>
				<div className="flex flex-col gap-10 justify-center items-center text-base max-sm:text-sm">
					<p className="max-w-[80%] text-center max-sm:max-w-full">
						My inbox is always open. Whether you want to say hi, ask something or talk about new opportunities. I will try my best to
						reply to every mail I receive!
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
							className="text-center font-medium border-primary border-2 rounded-md px-4 py-2 text-primary hover:bg-primary-300 hover:text-white transition-colors"
						>
							<i className="fa-regular fa-envelope" /> Say hello!
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
