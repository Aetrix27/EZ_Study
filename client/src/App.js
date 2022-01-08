import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
//import { Switch, Route, Router } from "react-router-dom";

import NavigationBar from './components/Navbar/NavigationBar';
import Landing from './components/Landing/Landing';

import 'bootstrap/dist/css/bootstrap.min.css';

//					<Route path="/cards" component={Cards} />
function App() {
	return (
			<div className="App">
				Test
				<Route component={NavigationBar} />
				<Switch>
					<Route exact path="/" component={Landing} />
			
				</Switch>
			</div>
	);
}

export default App;