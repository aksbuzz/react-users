import { call, all } from 'redux-saga/effects';
import homePageSaga from './HomePage/sagas';
import userPageSaga from './UserPage/sagas';

export default function* rootSaga() {
	yield all([call(homePageSaga), call(userPageSaga)]);
}
