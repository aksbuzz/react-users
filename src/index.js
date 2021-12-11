import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import UserPage from './container/UserPage';
import store from './store';
import {
	BrowserRouter as Router,
	Route,
	Routes as Switch,
} from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path='/' element={<HomePage />} />
					<Route path='/user/:userID' element={<UserPage />} />
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
