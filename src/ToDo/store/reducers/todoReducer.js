import {
	CLEAR_TODO_TITLE,
	CREATE_TODO,
	DELETE_TODO,
	GET_TODOS,
	SET_LOADING,
	SET_TODO_TITLE,
} from '../constants';

const INITIAL_STATE = {
	todos: [],
	title: '',
	loading: false,
};

const todoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_TODOS:
			return {
				...state,
				todos: action.payload,
				loading: false,
			};
		case SET_TODO_TITLE:
			return {
				...state,
				title: action.payload,
			};
		case CREATE_TODO:
			return {
				...state,
				todos: [action.payload, ...state.todos],
				loading: false,
			};
		case CLEAR_TODO_TITLE:
			return {
				...state,
				title: '',
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
				loading: false,
			};
		default:
			return state;
	}
};

export default todoReducer;
