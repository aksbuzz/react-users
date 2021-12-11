import { SET_USERS_REQUESTED } from './constants';

export const setUsers = users => ({
	type: SET_USERS_REQUESTED,
	payload: users,
});
