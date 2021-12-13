import {
	RESET_USERS,
	SET_USERS_FAIL,
	SET_USERS_REQUESTED,
	SET_USERS_SUCCESS,
} from './constants';

const INITIAL_STATE = {
	users: [],
	loading: false,
	error: null,
};

const homePageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_USERS_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case SET_USERS_SUCCESS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case SET_USERS_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case RESET_USERS:
			return {
				...state,
				users: [],
				loading: false,
			};
		default:
			return state;
	}
};

export default homePageReducer;
