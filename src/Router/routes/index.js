import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Error from '../components/Error';
import Home from '../components/Home';
import Nav from '../components/Nav';
import User from '../components/User';
import Users from '../components/Users';
import Account from '../components/Account';
import Profile from '../components/Profile';

const AllRoutes = props => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([
		{ id: 1, name: 'Franklin' },
		{ id: 2, name: 'Trevor' },
	]);

	const [login, setLogin] = useState(false);
	const onRemoveHandler = id => {
		setUsers(prevState => prevState.filter(user => user.id !== Number(id)));
		navigate('/users');
	};
	const onLoginHandler = () => {
		setLogin(prevState => !prevState);
	};
	return (
		<>
			<Nav />
			<Routes>
				<Route index element={<Home />} />
				<Route path={'/home'} element={<Home />} />
				{/* Nested Routes : url will change but the whole page will not load only the certain content */}
				<Route path={'/users/'} element={<Users users={users} />}>
					<Route
						path=':userID/'
						element={
							<User
								removeUser={onRemoveHandler}
								login={login}
								loginUser={onLoginHandler}
							/>
						}
					>
						<Route
							path='account'
							element={login ? <Account /> : <Navigate to={'/users'} />}
						/>
						<Route
							path='profile'
							element={login ? <Profile /> : <Navigate to={'/users'} />}
						/>
						{/* <Route path='*' element={<Error />} /> */}
					</Route>
				</Route>
				<Route path={'*'} element={<Error />} />
			</Routes>
		</>
	);
};

export default AllRoutes;
