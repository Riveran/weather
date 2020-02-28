import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getAutocompleteData, addItemOnPage } from '../store/actions/actions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import { AddCircleOutline } from '@material-ui/icons';

function AutocompleteComponent({autocompleteData, getAutocompleteData, addItemOnPage}) {
	const [open, setOpen] = useState(false);
	const [selectItem, setSelectItem] = useState(false);

	useEffect(() => {
		if(open) {
			getAutocompleteData();
		}
	}, [open])

	function handleCick (event, value) {
		setSelectItem(value);
	}

	function addItem () {
		addItemOnPage(selectItem);
	}

	return (
		<Grid
			container
			justify='flex-start'
			wrap='nowrap'
			spacing={2}
			alignItems='center'
			style={{marginTop: '100px'}}
		>
			<Grid container item xs={12} md={3}>
				<Autocomplete
					style={{width: '100%'}}
					open={open}
					onOpen={() => {
						setOpen(true);
					}}
					onClose={() => {
						setOpen(false);
					}}
					onChange={handleCick}
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

			<Grid>
				<IconButton disabled={!selectItem} onClick={addItem}>
					<AddCircleOutline />
				</IconButton>
			</Grid>
		</Grid>
	)
}

const mapStateToProps = (state) => ({
	autocompleteData: state.autocomplete
})

const mapDispatchToProps = {
	getAutocompleteData,
	addItemOnPage
}


export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteComponent);
