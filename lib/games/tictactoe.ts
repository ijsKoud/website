import { AI_ICON, USER_ICON } from "../constants";
import type { PlayingUser } from "../types";

export class TicTacToe {
	public board: string[];

	public constructor(board?: string[]) {
		this.board = board ?? Array(9).fill("");
	}

	public onClick(key: number): string[] {
		if (this.board[key]) return this.board;
		this.setMove(key, USER_ICON);

		const AiMove = this.getAiMove();
		this.setMove(AiMove, AI_ICON);

		return this.board;
	}

	public getIcon(type: string): string {
		return type === USER_ICON ? "fa-solid fa-xmark" : "fa-solid fa-o";
	}

	public reset() {
		this.board = Array(9).fill("");
	}

	private getAiMove(): number {
		const newBoard = [...this.board];
		const res = this.minMax(newBoard, AI_ICON);
		return res.index;
	}

	private minMax(board: string[], player: PlayingUser) {
		const emptySpots = this.getEmptySpots(board);

		if (this.checkWin(USER_ICON, board)) return { index: -1, score: -10 }; // Player: User
		if (this.checkWin(AI_ICON, board)) return { index: -1, score: 10 }; // Player: AI
		if (emptySpots.length === 0) return { index: -1, score: 0 };

		const moves: { index: number; score: number }[] = [];
		for (const spot of emptySpots) {
			const move: { index: number; score: number; player: PlayingUser } = { index: spot, score: 0, player };
			board[move.index] = move.player;

			const res = this.minMax(board, player === USER_ICON ? AI_ICON : USER_ICON); // Change the user
			moves.push({ ...res, index: move.index });
		}

		let bestMove = 0;
		if (player === AI_ICON) {
			let bestScore = -1e4;
			for (let i = 0; i < moves.length; i++) {
				if (moves[i].score > bestScore) {
					bestScore = moves[i].score;
					bestMove = i;
				}
			}
		} else {
			let bestScore = 1e4;
			for (let i = 0; i < moves.length; i++) {
				if (moves[i].score < bestScore) {
					bestScore = moves[i].score;
					bestMove = i;
				}
			}
		}

		return moves[bestMove];
	}

	private getEmptySpots(board: string[] = this.board) {
		const emptySpots = board
			.map((block, i) => ({
				block: Boolean(block),
				i
			}))
			.filter((res) => !res.block)
			.map((res) => res.i);

		return emptySpots;
	}

	private checkWin(player: PlayingUser, board: string[] = this.board) {
		const winCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[6, 4, 2]
		];

		const plays = board.reduce<number[]>((a, e, i) => (e === player ? a.concat(i) : a), []);
		let gameWon: { index: number; player: PlayingUser } | undefined;

		for (const win of winCombos) {
			const index = winCombos.indexOf(win);
			if (win.every((elem) => plays.includes(elem))) {
				gameWon = { index, player };
			}
		}

		return gameWon;
	}

	private setMove(index: number, type: PlayingUser) {
		this.board[index] = type;
	}
}
