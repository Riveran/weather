import { TEMPERATURE_UPDATE } from '../constants';

const initialState = {
	defaultValues: {
		min: -30,
		max: +30,
		step: 1
	},
	temperatureRange: [-30, +30]
}

const temperatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEMPERATURE_UPDATE:
			return { ...state, temperatureRange: action.payload };
    default:
        return state;
  }
};

export default temperatureReducer;
