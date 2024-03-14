import { Cell } from './Cell';
import './Board.css';

const board = Array(9).fill(null);

export const Board: React.FC = () => {
	return (
		<section className="board">
			{board.map((_, index) => (
				<Cell key={index} index={index} />
			))}
		</section>
	);
};
