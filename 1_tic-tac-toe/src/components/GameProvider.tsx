import React, { ReactNode, createContext, useContext, useState } from 'react';

type CELL_STATES = 'X' | 'O' | null;
type WINNER_STATES = 'X' | 'O' | 'D' | null;

// Game Context

interface GameContextType {
	board: CELL_STATES[];
	isXTurn: boolean;
	winner: WINNER_STATES;
	handleMove: (index: number) => void;
	restartGame: () => void;
}

const GameContext = createContext<GameContextType>({
	board: Array(9).fill(null),
	isXTurn: true,
	winner: null,
	handleMove: (_: number) => {
		throw new Error('handleMove function not implemented');
	},
	restartGame: () => {
		throw new Error('restartGame function not implemented');
	},
});

// Functions

const checkWinner = (board: CELL_STATES[]) => {
	// Define winning combinations
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a]; // Return 'X' or 'O'
		}
	}

	return null; // No winner yet
};

export function useGame() {
	return useContext(GameContext);
}

interface GameProviderProps {
	children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXTurn, setIsXTurn] = useState(true);
	const [winner, setWinner] = useState<WINNER_STATES>(null);
	const handleMove = (index: number) => {
		if (winner !== null) {
			console.error('Game is finished, please restart the game to make a move');
			return;
		}

		const newBoard = [...board];
		const player = isXTurn ? 'X' : 'O';
		console.log(isXTurn);
		console.log(player);
		newBoard[index] = player;
		setBoard(newBoard);
		setIsXTurn(!isXTurn);

		const possibleWinner = checkWinner(newBoard);
		if (possibleWinner === null) {
			return;
		}
		console.log(`The winner is ${player}`);
		setWinner(player);
	};
	const restartGame = () => {
		setBoard(Array(9).fill(null));
		setIsXTurn(true);
		setWinner(null);
	};

	return (
		<GameContext.Provider
			value={{ board, isXTurn, winner, handleMove, restartGame }}
		>
			{children}
		</GameContext.Provider>
	);
};
