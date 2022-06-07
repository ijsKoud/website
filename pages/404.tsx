import Page from "../components/Page";
import type { NextPageWithLanyard } from "../lib/types";
import React, { useState } from "react";

const NotFound: NextPageWithLanyard = () => {
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""]
	]);

	const getIcon = (type: string): string => {
		return type === "x" ? "fa-solid fa-xmark" : "fa-solid fa-o";
	};

	return (
		<Page className="notfound-page-container">
			<div className="notfound-container">
				<div className="notfound-text">
					<h1>Uh oh, this page does not exist. 🤔</h1>
					<p>I do have an unbeatable TicTacToe AI for you though.</p>
				</div>
				<div className="notfound-tictacttoe">
					{board.map((row, key) => (
						<div key={key}>
							{row.map((block, key) => (
								<button key={key}>{block && <i className={getIcon(block)} />}</button>
							))}
						</div>
					))}
				</div>
			</div>
		</Page>
	);
};

export default NotFound;
