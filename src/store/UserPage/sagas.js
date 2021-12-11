import { call, put, takeEvery } from 'redux-saga/effects';

import { GET_USER_DETAILS, SET_USER_SUCCESS, SET_USER_FAIL } from './constants';
import axios from 'axios';

const USER_URL = 'https://reqres.in/api/users/';

// const USERS_URL = 'https://reqres.in/api/users/';

const fetchUserDetails = async userID =>
	await axios
		.get(USER_URL + `${userID}`)
		.then(response => response.data.data)
		.catch(e => e);

function* fetchUserSaga(action) {
	try {
		const data = yield call(fetchUserDetails, action.payload);
		yield put({ type: SET_USER_SUCCESS, payload: data });
	} catch (error) {
		yield put({ type: SET_USER_FAIL, payload: error });
	}
}

export default function* userPageSaga() {
	yield takeEvery(GET_USER_DETAILS, fetchUserSaga);
}
