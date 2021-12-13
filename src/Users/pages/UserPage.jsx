// import { CssBaseline } from '@mui/material';
import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import UserPageContainer from '../container/UserPage';

const useStyles = makeStyles(() => ({
	root: {
		width: '100vw',
		display: 'flex',
		justifyItems: 'center',
		textAlign: 'center',
	},
}));

const UserPage = props => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Container className={classes.root}>
				<UserPageContainer />
			</Container>
		</>
	);
};

export default UserPage;
