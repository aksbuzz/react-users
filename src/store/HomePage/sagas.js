import { call, put, takeEvery } from 'redux-saga/effects';
import {
	SET_USERS_REQUESTED,
	SET_USERS_FAIL,
	SET_USERS_SUCCESS,
} from './constants';
import axios from 'axios';

const USERS_URL = 'https://reqres.in/api/users';

const fetchUsers = async () =>
	await axios
		.get(USERS_URL)
		.then(response => response.data.data)
		.catch(e => e);

function* fetchUserSaga() {
	try {
		const data = yield call(fetchUsers);
		yield put({ type: SET_USERS_SUCCESS, payload: data });
	} catch (error) {
		yield put({ type: SET_USERS_FAIL, payload: error });
	}
}

export default function* homePageSaga() {
	yield takeEvery(SET_USERS_REQUESTED, fetchUserSaga);
}
