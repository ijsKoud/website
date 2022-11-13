import type { NextPage } from "next";
import React, { useState } from "react";
import HomeSectionLayout from "../components/HomeSectionLayout";
import Modal from "../components/Modal";
import { AI_ICON, USER_ICON } from "../lib/constants";
import { TicTacToe } from "../lib/games/tictactoe";

interface Props {
	statusCode: number | undefined;
}

// ( ・⌓・｀)

const Error: NextPage<Props> = ({ statusCode }) => {
	const [game, setGame] = useState(new TicTacToe());
	const [board, setBoard] = useState(game.board);

	const [temp, setTemp] = useState(false); // used to re-render the page

	const onClick = (index: number) => {
		const _board = game.onClick(index);
		setBoard(_board);
		setTemp(!temp);
	};

	const newGame = (aiStart: boolean) => {
		const _game = new TicTacToe();
		if (aiStart) _game.AiStart();

		setGame(_game);
		setBoard(_game.board);
	};

	return (
		<div className="min-h-screen w-full -mt-24 px-40 max-lg:px-28 max-md:px-9 max-sm:px-3 place-items-center grid">
			<HomeSectionLayout contactTitle title="😔 AN ERROR OCCURRED." id="" width="w-3/5 max-xl:w-full text-center">
				<div className="flex flex-col items-center justify-center">
					<Modal onClick={() => newGame(false)} isOpen={Boolean(game.winner)}>
						<div className="max-w-md">
							<div>
								<h1 className="text-xl font-extrabold max-sm:text-lg">
									{game.winner === AI_ICON
										? "😞 Game Over..."
										: game.winner === USER_ICON
										? "🥳 Congratulations!"
										: "🥧 It's a pie... I Mean Tie!"}
								</h1>
							</div>
							<p className="text-base font-semibold max-sm:text-sm">
								Do you want to another game? Press one of the options below or click on the X button in the corner.
							</p>
						</div>
						<div className="mt-4 flex justify-between items-center max-sm:flex-col max-sm:gap-2 max-sm:items-start">
							<button
								className="text-base font-bold bg-tertairy px-4 py-2 hover:bg-secondary transition-colors rounded-md"
								onClick={() => newGame(false)}
							>
								🙋 I want to start
							</button>
							<button
								className="text-base font-bold bg-tertairy px-4 py-2 hover:bg-secondary transition-colors rounded-md"
								onClick={() => newGame(true)}
							>
								🤖 AI should start
							</button>
						</div>
					</Modal>
					<p className="text-center text-base max-sm:text-sm">
						{statusCode === 500
							? `Ugh, one of the workers behind the scenes broke something again. Why not play a game of tic-tac-toe before you try again?`
							: "Ugh, someone must have pulled this page offline. Why not play a game of tic-tac-toe before you try to load this page again?"}
					</p>
					<div className="grid auto-cols-auto auto-rows-auto grid-cols-[100px,100px,100px] grid-rows-[100px,100px,100px] mt-5">
						{board.map((block, key) => (
							<button
								className="w-[100px] h-[100px] text-3xl border border-black dark:border-light-gray bg-transparent hover:bg-background-alt transition-colors"
								onClick={() => onClick(key)}
								key={key}
							>
								{block && <i className={game.getIcon(block)} />}
							</button>
						))}
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
