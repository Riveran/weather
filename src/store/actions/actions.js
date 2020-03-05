import { GET_AUTOCOMPLETE_DATA, ADD_ITEM_ON_PAGE, DELETE_ITEM, TEMPERATURE_UPDATE } from '../constants';

export const getAutocompleteData = () => ({
	type: GET_AUTOCOMPLETE_DATA
});

export const autocompleteReceived = (data) => ({
	type: GET_AUTOCOMPLETE_DATA,
	payload: data
});

export const addItemOnPage = (value) => ({
	type: ADD_ITEM_ON_PAGE,
	payload: value
});

export const deleteItem = (id) => ({
	type: DELETE_ITEM,
	payload: id
})

export const updateTemperatureRange = (tepreatureRange) => ({
	type: TEMPERATURE_UPDATE,
	payload: tepreatureRange
});