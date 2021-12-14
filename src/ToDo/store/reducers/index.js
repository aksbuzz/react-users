import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
	todoReducerState: todoReducer,
});

export default rootReducer;
