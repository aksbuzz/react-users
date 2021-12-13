import { ThemeProvider } from '@material-ui/core';
import {
	BrowserRouter as Router,
	Route,
	Routes as Switch,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';

const AllRoutes = () => {
	return (
		<div>
			<ThemeProvider>
				<Router>
					<Navbar />
					<Switch>
						<Route path='/' element={<HomePage />} />
						<Route path='/user/:userID' element={<UserPage />} />
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
};

export default AllRoutes;
