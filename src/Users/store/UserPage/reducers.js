import {
	GET_USER_DETAILS,
	RESET_USER,
	SET_USER_FAIL,
	SET_USER_REQUESTED,
	SET_USER_SUCCESS,
} from './constants';

const INITIAL_STATE = {
	user: [],
	loading: false,
	error: null,
};

const userPageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_USER_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case SET_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case SET_USER_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case GET_USER_DETAILS:
			return {
				...state,
				// userID: action.payload,
			};
		case RESET_USER:
			return {
				...state,
				user: [],
				loading: false,
			};
		default:
			return state;
	}
};

export default userPageReducer;
