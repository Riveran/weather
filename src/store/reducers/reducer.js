import { combineReducers } from 'redux';
import autocmpleteReducer from './autocomplete';
import dashboardReducer from './dashboard';
import temperatureReducer from './slider';

export const rootReducer = combineReducers({
	autocomplete: autocmpleteReducer,
	dashboard: dashboardReducer,
	temperature: temperatureReducer
});