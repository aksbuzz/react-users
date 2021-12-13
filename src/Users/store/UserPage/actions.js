import {
	GET_USER_DETAILS,
	SET_USER_REQUESTED,
	EDIT_USER_DETAILS_REQUESTED,
} from './constants';

export const setUser = user => ({
	type: SET_USER_REQUESTED,
	payload: user,
});

export const getUserID = userID => ({
	type: GET_USER_DETAILS,
	payload: userID,
});

export const editUser = user => ({
	type: EDIT_USER_DETAILS_REQUESTED,
	payload: user,
});
