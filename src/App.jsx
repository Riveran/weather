import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Autocomplete from './components/autocomplete';

function App() {
  return (
		<>
			<CssBaseline />
			<Container maxWidth="lg">
				<Autocomplete />
			</Container>
		</>
  );
}

export default App;
