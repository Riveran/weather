import { combineReducers } from 'redux';
import autocmpleteReducer from './autocomplete';

export const rootReducer = combineReducers({
	autocomplete: autocmpleteReducer
})