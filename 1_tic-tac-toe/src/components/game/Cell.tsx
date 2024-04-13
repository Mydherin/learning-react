import './Cell.css';
import { useGame } from './GameProvider';

interface CellProps {
	index: number;
}

export const Cell: React.FC<CellProps> = ({ index }) => {
	const { board, handleMove } = useGame();
	return (
		<section className="cell" onClick={() => handleMove(index)}>
			{board[index]}
		</section>
	);
};
