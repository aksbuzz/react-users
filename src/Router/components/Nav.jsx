import { NavLink } from 'react-router-dom';
const Nav = props => {
	const style = ({ isActive }) => ({
		fontWeight: isActive ? 'bold' : 'normal',
		paddingLeft: '1rem',
	});
	return (
		<>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}
			>
				<NavLink to={'/home'} style={style}>
					Home
				</NavLink>
				<NavLink to={'/users'} style={style}>
					Users
				</NavLink>
			</nav>
		</>
	);
};

export default Nav;
