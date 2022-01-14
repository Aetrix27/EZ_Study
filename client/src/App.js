import './App.css';
import { Switch, Route } from 'react-router-dom';
//import { Switch, Route, Router } from "react-router-dom";

import NavigationBar from './components/Navbar/NavigationBar';
import Landing from './components/Landing/Landing';
import Cards from './components/Cards/Cards';
import CreateCard from './components/Cards/createCard';
import { Navbar, Container, Nav } from "react-bootstrap"
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';


/*
	<Route component = {Landing} exact path="/" />
					<Route component = {Cards} path="/cards" />
					
					<Route component = { createCard} path="/createCard" />
*/

function App() {
	return (
			<div id = "App">
				<NavigationBar />

				<Switch>
					<Route exact path = "/" ><Landing /></Route>
					<Route component = {Cards} path="/card" />
					<Route component = {CreateCard} path="/createCard" />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />

				</Switch>
				
				
			</div>
			
	);
}

export default App;