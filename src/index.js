import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import AllRoutes from './Users/routes';
// import store from './store';
import store from './ToDo/store';
// import ToDo from './ToDo/components/Todo';
import AllRoutes from '../src/Router/routes/';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <AllRoutes /> */}
			{/* <ToDo /> */}
			<BrowserRouter>
				<AllRoutes />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
