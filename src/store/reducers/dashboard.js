import { ADD_ITEM_ON_PAGE, DELETE_ITEM } from '../constants';

const initialState = {
	data: []
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_ON_PAGE:
				return { data: state.data.concat(action.payload) };
		case DELETE_ITEM:
			return { data: state.data.filter(item => item.id !== action.payload)}
    default:
        return state;
  }
};

export default dashboardReducer;