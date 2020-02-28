import { combineReducers } from 'redux';
import autocmpleteReducer from './autocomplete';
import dashboardReducer from './dashboard';

export const rootReducer = combineReducers({
	autocomplete: autocmpleteReducer,
	dashboard: dashboardReducer
})