import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Autocomplete from './components/autocomplete';
import Dashboard from './components/dashboard';
import Grid from '@material-ui/core/Grid';
import TemperatureSlider from './components/temperature.slider';

function App() {
  return (
		<>
			<CssBaseline />
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid
						container
						item
						justify='flex-start'
						alignItems='center'
						style={{marginTop: '50px'}}
						spacing={3}
					>
						<Grid container alignItems='center' item xs={12} md={6}>
							<Autocomplete />
						</Grid>
						<Grid container item xs={12} md={3}>
							<TemperatureSlider />
						</Grid>
					</Grid>
					<Grid container item>
						<Dashboard />
					</Grid>
				</Grid>
			</Container>
		</>
  );
}

export default App;
