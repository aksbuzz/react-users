import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { createNewTodo, deleteExistedTodo, getAllTodos } from '../../apis';
import {
	CLEAR_TODO_TITLE,
	CREATE_TODO,
	CREATE_TODO_REQUESTED,
	DELETE_TODO,
	DELETE_TODO_REQUESTED,
	GET_TODOS,
	GET_TODOS_REQUESTED,
	SET_LOADING,
	SET_TODO_TITLE,
	SET_TODO_TITLE_REQUESTED,
} from '../constants';

function* getTodos() {
	yield put({ type: SET_LOADING });
	const todos = yield call(getAllTodos);
	yield put({ type: GET_TODOS, payload: todos });
}

function* setTodoTitle(action) {
	yield put({ type: SET_TODO_TITLE, payload: action.payload });
}

function* createTodo(action) {
	console.log(action);
	yield put({ type: SET_LOADING });
	const newTodo = yield call(createNewTodo, action.payload);
	yield put({ type: CREATE_TODO, payload: newTodo });
	yield put({ type: CLEAR_TODO_TITLE });
}

function* deleteTodo(action) {
	yield put({ type: SET_LOADING });
	const todo = yield call(deleteExistedTodo, action.payload);
	yield put({ type: DELETE_TODO, payload: todo });
}

export default function* todoSaga() {
	yield takeEvery(GET_TODOS_REQUESTED, getTodos);
	yield takeEvery(SET_TODO_TITLE_REQUESTED, setTodoTitle);
	yield takeLatest(CREATE_TODO_REQUESTED, createTodo);
	yield takeEvery(DELETE_TODO_REQUESTED, deleteTodo);
}
