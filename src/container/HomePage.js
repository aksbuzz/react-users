import {
	List,
	Avatar,
	Container,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@mui/material';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUsers } from '../store/HomePage/actions';
import {
	makeSelectError,
	makeSelectLoading,
	makeSelectUsers,
} from '../store/HomePage/selectors';

const App = (props = {}) => {
	const { users, setUser, loading, error, clearUser } = props;
	useEffect(() => {
		clearUser();
		setUser();

		// eslint-disable-next-line
	}, []);

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && !loading && <p>{error}</p>}
			<Container maxWidth='sm'>
				<List
					sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				>
					{users &&
						users.length > 0 &&
						users.map(user => (
							<Link to={`user/${Number(user.id)}`}>
								<ListItem key={Number(user.id)}>
									<ListItemAvatar>
										<Avatar scr={user.avatar} />
									</ListItemAvatar>
									<ListItemText
										primary={user.first_name + ' ' + user.last_name}
									/>
								</ListItem>
							</Link>
						))}
				</List>
			</Container>
		</>
	);
};

const mapStateToProps = state => ({
	users: makeSelectUsers(state),
	loading: makeSelectLoading(state),
	error: makeSelectError(state),
});

const mapDispatchToProps = dispatch => ({
	setUser: users => dispatch(setUsers(users)),
	clearUser: () => dispatch({ type: 'RESET_GLOBAL_STATE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
