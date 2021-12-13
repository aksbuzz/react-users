import { DELETE_USER_REQUESTED, SET_USERS_REQUESTED } from './constants';

export const setUsers = users => ({
	type: SET_USERS_REQUESTED,
	payload: users,
});

export const deleteUser = userID => ({
	type: DELETE_USER_REQUESTED,
	payload: userID,
});
