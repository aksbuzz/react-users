import {
	ADD_USER_FAIL,
	ADD_USER_REQUESTED,
	ADD_USER_SUCCCESS,
} from './constants';

const INITIAL_STATE = {
	user: [],
	loading: false,
	error: '',
};

const addUserReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_USER_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case ADD_USER_SUCCCESS:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case ADD_USER_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default addUserReducer;
