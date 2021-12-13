import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserID, setUser } from '../store/UserPage/actions';
import { makeSelectUser } from '../store/UserPage/selectors';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const UserPageContainer = props => {
	const { user = {}, sendUserID, setUser } = props;
	let { userID } = useParams();
	useEffect(() => {
		sendUserID(userID);
		setUser();
		// eslint-disable-next-line
	}, []);

	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={user.avatar} />
				<CardContent>
					<Typography variant='h5' component='h2'>
						{`${user.first_name || ''} ${user.last_name || ''}`}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{user.email || ''}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					Edit
				</Button>
				<Button size='small' color='primary'>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

const mapStateToProps = state => ({
	user: makeSelectUser(state),
});

const mapDispatchToProps = dispatch => ({
	sendUserID: userID => dispatch(getUserID(userID)),
	setUser: userID => dispatch(setUser(userID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);
