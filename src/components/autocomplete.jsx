import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getAutocompleteData } from '../store/actions/actions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

function AutocompleteComponent({autocompleteData, getAutocompleteData}) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getAutocompleteData();
	}, [open])

	return (
		<Grid container justify='flex-start' wrap='nowrap'>
			<Grid container item xs={12} md={3}>
				<Autocomplete
					style={{width: '100%', marginTop: '100px'}}
					open={open}
					onOpen={() => {
						setOpen(true);
					}}
					onClose={() => {
						setOpen(false);
					}}
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
		</Grid>
	)
}

const mapStateToProps = (state) => ({
	autocompleteData: state.autocomplete
})

const mapDispatchToProps = {
	getAutocompleteData
}


export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteComponent);
