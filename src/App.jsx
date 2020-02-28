import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Autocomplete from './components/autocomplete';
import Dashboard from './components/dashboard';
import Grid from '@material-ui/core/Grid';


function App() {
  return (
		<>
			<CssBaseline />
			<Container maxWidth="lg">
				<Grid container item xs={12} spacing={2}>
					<Grid container item>
						<Autocomplete />
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
