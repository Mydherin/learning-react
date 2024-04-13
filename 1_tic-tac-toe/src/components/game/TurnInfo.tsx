import { useGame } from './GameProvider';
import './TurnInfo.css';

export const TurnInfo: React.FC = () => {
	const { isXTurn } = useGame();
	return (
		<section className="turnInfo">
			<article
				className={`turnInfo__label ${isXTurn ? 'turnInfo__label--active' : ''}`}
			>
				X
			</article>
			<article
				className={`turnInfo__label ${!isXTurn ? 'turnInfo__label--active' : ''}`}
			>
				O
			</article>
		</section>
	);
};
