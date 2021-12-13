import { combineReducers } from 'redux';
import addUserReducer from './AddUserPage/reducers';
import homePageReducer from './HomePage/reducers';
import userPageReducer from './UserPage/reducers';

const rootReducerMain = combineReducers({
	homePageState: homePageReducer,
	userPageState: userPageReducer,
	addUserPageState: addUserReducer,
});

const rootReducer = (state, action) => {
	// when a RESET_GLOBAL_STATE action type is dispatched it will reset redux state
	if (action.type === 'RESET_GLOBAL_STATE') {
		state = undefined;
	}

	return rootReducerMain(state, action);
};

export default rootReducer;
