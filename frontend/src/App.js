import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import theme from './components/Theme.js';

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Router>
					<Navbar />
					<Switch>
						<Route path='/' component={Home} />
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
