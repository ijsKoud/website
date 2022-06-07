import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";
import React, { useState } from "react";
import { TicTacToe } from "../lib/games/tictactoe";
import Modal from "../components/Modal";
import { AI_ICON, USER_ICON } from "../lib/constants";
import IconButton from "../components/IconButton";
import Button from "../components/Button";

const NotFound: NextPageWithLanyard = () => {
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
		<Page className="notfound-page-container">
			<Modal onClick={() => newGame(false)} isOpen={Boolean(game.winner)}>
				<div>
					<div className="notfound-modal-top">
						<h1>
							{game.winner === AI_ICON
								? "😞 Game Over..."
								: game.winner === USER_ICON
								? "🥳 Congratulations!"
								: "🥧 It's a pie... no I mean Tie!"}
						</h1>
						<IconButton type="button" icon="fa-solid fa-times" onClick={() => newGame(false)} style="string" />
					</div>
					<p>Do you want to another game? Press one of the options below or click on the X button in the corner.</p>
				</div>
				<div className="notfound-modal-buttons">
					<Button type="button" onClick={() => newGame(false)} style="main" title="🙋 I want to start" />
					<Button type="button" onClick={() => newGame(true)} style="main" title="🤖 AI should start" />
				</div>
			</Modal>
			<div className="notfound-container">
				<div className="notfound-text">
					<h1>Uh oh, this page does not exist. 🤔</h1>
					<p>I do have an unbeatable TicTacToe AI for you though.</p>
				</div>
				<div className="notfound-tictacttoe">
					{board.map((block, key) => (
						<button onClick={() => onClick(key)} key={key}>
							{block && <i className={game.getIcon(block)} />}
						</button>
					))}
				</div>
			</div>
		</Page>
	);
};

export default NotFound;
