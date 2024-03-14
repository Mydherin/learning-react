import './App.css';
import { Board } from './components/Board';
import { GameProvider } from './components/GameProvider';
import { ResultPopup } from './components/ResultPopup';
import { TurnInfo } from './components/TurnInfo';

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
