import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.js';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
