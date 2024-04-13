import './App.css';
import { Board } from './components/game/Board';
import { GameProvider } from './components/game/GameProvider';
import { ResultPopup } from './components/game/ResultPopup';
import { TurnInfo } from './components/game/TurnInfo';

function App() {
	return (
		<>
			<h1>Tic Tac Toe</h1>
			<GameProvider>
				<ResultPopup />
				<Board />
				<TurnInfo />
			</GameProvider>
		</>
	);
}

export default App;
