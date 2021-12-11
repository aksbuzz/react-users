import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserID, setUser } from '../store/UserPage/actions';
import { makeSelectUser } from '../store/UserPage/selectors';

const UserPage = props => {
	const { user, sendUserID, setUser } = props;
	let { userID } = useParams();
	useEffect(() => {
		sendUserID(userID);
		setUser();
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<h1>User: {user.first_name}</h1>
		</>
	);
};

const mapStateToProps = state => ({
	user: makeSelectUser(state),
});

const mapDispatchToProps = dispatch => ({
	sendUserID: userID => dispatch(getUserID(userID)),
	setUser: userID => dispatch(setUser(userID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
