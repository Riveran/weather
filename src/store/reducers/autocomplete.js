import { GET_AUTOCOMPLETE_DATA, AUTOCOMPLETE_DATA_RECEIVED } from '../constants';

const initialState = {
	loading: false,
	data: []
}

const autocmpleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTOCOMPLETE_DATA:
				return { ...state, loading: true };
		case AUTOCOMPLETE_DATA_RECEIVED:
				return { ...state, data: action.payload, loading: false }
    default:
        return state;
  }
};

export default autocmpleteReducer;