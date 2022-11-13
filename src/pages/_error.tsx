import type { NextPage } from "next";
import React from "react";
import HomeSectionLayout from "../components/HomeSectionLayout";

interface Props {
	statusCode: number | undefined;
}

// ( ・⌓・｀)

const Error: NextPage<Props> = ({ statusCode }) => {
	return (
		<div className="min-h-screen w-full mt-6 px-40 max-lg:px-28 max-md:px-9 max-sm:px-3 place-items-center grid">
			<HomeSectionLayout contactTitle title="AN ERROR OCCURRED." id="" width="w-full max-xl:w-full text-center">
				<div className="flex flex-col items-center justify-center">
					<p className="text-center text-base max-sm:text-sm">
						{statusCode === 500
							? `Ugh, one of the workers behind the scenes broke something again. Why not play a game of tic-tac-toe before you try again?`
							: "Ugh, someone must have pulled this page offline. Why not play a game of tic-tac-toe before you try to load this page again?"}
					</p>
					<div className="grid auto-cols-auto auto-rows-auto grid-cols-[100px,100px,100px] grid-rows-[100px,100px,100px] mt-5">
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
						<button className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors" />
					</div>
				</div>
			</HomeSectionLayout>
		</div>
	);
};

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
