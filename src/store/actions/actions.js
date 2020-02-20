import { GET_AUTOCOMPLETE_DATA, AUTOCOMPLETE_DATA_RECEIVED } from '../constants';

export const getAutocompleteData = () => ({
	type: GET_AUTOCOMPLETE_DATA
});

export const autocompleteReceived = (data) => ({
	type: GET_AUTOCOMPLETE_DATA,
	payload: data
});