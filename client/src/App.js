import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
//import { Switch, Route, Router } from "react-router-dom";

import NavigationBar from './components/Navbar/NavigationBar';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';

import 'bootstrap/dist/css/bootstrap.min.css';

// Load default state, create redux store, save state to redux store
const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
	saveState(store.getState());
});

//					<Route path="/cards" component={Cards} />
function App() {
	return (
			<div className="App">
				<Route component={NavigationBar} />
				<Switch>
					<Route exact path="/" component={Landing} />
			
				</Switch>
				<Footer />
			</div>
	);
}

export { store };

export default App;