import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	main: {
		backgroundColor: '#fff',
		height: '3em',
		display: 'flex',
		justifyContent: 'space-around',
		textAlign: 'centre',
	},
}));

const Navbar = props => {
	const classes = useStyles();

	return (
		<nav className={classes.main}>
			<Link to={'/'}>All users</Link>
			<Link to={'/add'}>Add</Link>
		</nav>
	);
};

export default Navbar;
