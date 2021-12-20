import './App.css'
import Leagues from './screens/leagues'
import PremierLeague from './screens/PremierLeague'
import LaLiga from './screens/LaLiga'
import Bundesliga from './screens/Bundesliga'
import SerieA from './screens/SerieA'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div>
			<div className='app-container'>
				<Routes>
					<Route path='/' element={<Leagues />}></Route>
					<Route path='/premierleague' element={<PremierLeague />}></Route>
					<Route path='/laliga' element={<LaLiga />}></Route>
					<Route path='/seriea' element={<SerieA />}></Route>
					<Route path='/bundesliga' element={<Bundesliga />}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
