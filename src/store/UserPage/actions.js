import { GET_USER_DETAILS, SET_USER_REQUESTED } from './constants';

export const setUser = user => ({
	type: SET_USER_REQUESTED,
	payload: user,
});

export const getUserID = userID => ({
	type: GET_USER_DETAILS,
	payload: userID,
});
