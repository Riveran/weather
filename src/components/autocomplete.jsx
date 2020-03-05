import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getAutocompleteData, addItemOnPage } from '../store/actions/actions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import { AddCircleOutline } from '@material-ui/icons';
import Snackbar from '@material-ui/core/Snackbar';

function AutocompleteComponent({autocompleteData, dashboardData, getAutocompleteData, addItemOnPage}) {
	const [value, setValue] = useState('');
	const [open, setOpen] = useState(false);
	const [selectItem, setSelectItem] = useState(false);
	const [isItemUse, setIsItemUse] = useState(false);

	useEffect(() => {
		if(open) {
			getAutocompleteData();
		}
	}, [open]);

	function handleCick (event, value) {
		setIsItemUse(false);
		setSelectItem(value);
	}

	function checkOnDuplicate () {
		const { id } = selectItem;

		const isDuplucate = dashboardData.find(item => (
			item.id === id
		))

		return !!isDuplucate;
	}

	function addItem () {
		const isDuplucate = checkOnDuplicate();

		if (isDuplucate) {
			setValue('');
			setIsItemUse(true);
			return setSelectItem(false);
		}

		addItemOnPage(selectItem);
		setValue('');
		setSelectItem(false);
	}

	function handleInputChange (event, value) {
		setValue(value);
	}

	return (
		<>
			<Grid item xs={10}>
				<Autocomplete
					inputValue={value}
					clearText='clear'
					open={open}
					onOpen={() => {
						setOpen(true);
					}}
					onClose={() => {
						setOpen(false);
					}}
					onChange={handleCick}
					onInputChange={handleInputChange}
					options={autocompleteData.data}
					getOptionLabel={option => option.city}
					renderInput={params => (
						<TextField
							{...params}
							label="Выберите город"
							fullWidth
							variant="outlined"
							InputProps={{
								...params.InputProps,
								endAdornment: (
									<>
										{autocompleteData.loading ? <CircularProgress color="inherit" size={20} /> : null}
										{params.InputProps.endAdornment}
									</>
								),
							}}
							/>
							)}
				/>
			</Grid>

			<Grid item xs={2}>
				<IconButton disabled={!selectItem} onClick={addItem}>
					<AddCircleOutline />
				</IconButton>
			</Grid>

			<Snackbar
        anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				open={isItemUse}
				autoHideDuration={4000}
        message={`Город уже добавлен`}
      />
		</>
	)
}

const mapStateToProps = (state) => ({
	autocompleteData: state.autocomplete,
	dashboardData: state.dashboard.data
})

const mapDispatchToProps = {
	getAutocompleteData,
	addItemOnPage
}


export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteComponent);
