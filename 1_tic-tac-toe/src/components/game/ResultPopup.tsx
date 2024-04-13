import { useGame } from './GameProvider';
import './ResultPopup.css';

export const ResultPopup: React.FC = () => {
	const { winner, restartGame } = useGame();

	if (!winner) {
		return;
	}

	let message = 'It is a draw!';
	if (winner === 'X') {
		message = 'The winner is X!';
	} else if (winner === 'O') {
		message = 'The winner is O!';
	}

	return (
		<section className="resultPopup">
			<p className="resultPopup__message">{message}</p>
			<button className="resultPopup__button" onClick={restartGame}>
				Restart
			</button>
		</section>
	);
};
