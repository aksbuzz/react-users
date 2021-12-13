import { ADD_USER_REQUESTED } from './constants';

export const addUser = user => ({
	type: ADD_USER_REQUESTED,
	payload: user,
});
