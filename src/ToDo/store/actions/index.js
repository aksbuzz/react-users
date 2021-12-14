import {
	CREATE_TODO_REQUESTED,
	DELETE_TODO_REQUESTED,
	GET_TODOS_REQUESTED,
	SET_TODO_TITLE_REQUESTED,
} from '../constants';

export const getTodos = () => ({
	type: GET_TODOS_REQUESTED,
});

export const deleteTodos = id => ({
	type: DELETE_TODO_REQUESTED,
	payload: id,
});

export const setTodoTitle = title => ({
	type: SET_TODO_TITLE_REQUESTED,
	payload: title,
});

export const createTodo = title => ({
	type: CREATE_TODO_REQUESTED,
	payload: title,
});
