import {
	List,
	Avatar,
	Container,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@material-ui/core';
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
	const { users = [], setUser, loading, error } = props;
	useEffect(() => {
		// clearUser();
		setUser();

		// eslint-disable-next-line
	}, []);

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && !loading && <p>{error}</p>}
			{!loading && (
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
			)}
		</>
	);
};

const mapStateToProps = state => ({
	users: makeSelectUsers(state),
	loading: makeSelectLoading(state),
	error: makeSelectError(state),
});

const mapDispatchToProps = dispatch => ({
	setUser: () => dispatch(setUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
