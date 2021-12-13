import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AllRoutes from './Users/routes';
import store from './store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AllRoutes />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
