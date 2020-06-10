import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Events from './components/layout/Events';
import Schedule from './components/Schedule';

import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path="/" component={Home} />
					<div className="container">
						<Route exact path="/" component={About} />
						<Route exact path="/" component={Events} />
					</div>

					<Switch>
						<Route exact path="/schedule" component={Schedule} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
