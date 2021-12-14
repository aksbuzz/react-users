import { NavLink, Outlet, useParams } from 'react-router-dom';

const User = props => {
	const style = ({ isActive }) => ({
		fontWeight: isActive ? 'bold' : 'normal',
		paddingLeft: '1rem',
	});
	const { removeUser, login, loginUser } = props;
	const { userID } = useParams();
	return (
		<>
			<nav
				style={{
					display: 'flex',
					listStyle: 'none',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					borderBottom: 'solid 1px',
					borderTop: 'solid 1px',
					borderRight: 'solid 1px',
					borderLeft: 'solid 1px',
					marginTop: '-5rem',
					height: '2rem',
					width: '10rem',
				}}
			>
				<li>
					<NavLink to={`account`} style={style}>
						Account
					</NavLink>
				</li>
				<li style={{ marginLeft: '1rem' }}>
					<NavLink to={`profile`} style={style}>
						Profile
					</NavLink>
				</li>
			</nav>
			<button onClick={() => loginUser()}>{login ? 'logout' : 'login'}</button>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<button
					onClick={() => removeUser(userID)}
					disabled={login ? false : true}
					style={{ position: 'absolute', right: '2rem', top: '5rem' }}
				>
					Remove User
				</button>
				<Outlet />
			</div>
		</>
	);
};

export default User;
