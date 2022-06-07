import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";
import React, { useState } from "react";
import { TicTacToe } from "../lib/games/tictactoe";

const NotFound: NextPageWithLanyard = () => {
	// const [game] = useState(new TicTacToe(["x", "", "o", "o", "", "o", "", "x", "x"]));
	const [game] = useState(new TicTacToe());
	const [board, setBoard] = useState(game.board);
	const [temp, setTemp] = useState(false); // used to re-render the page

	const onClick = (index: number) => {
		const _board = game.onClick(index);
		setBoard(_board);
		setTemp(!temp);
	};

	return (
		<Page className="notfound-page-container">
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
