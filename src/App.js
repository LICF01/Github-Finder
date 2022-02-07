import Navbar from './layout/Navbar';
import { GithubProvider } from './context/GithubContext';
import Main from './layout/Main';

import { Box } from '@chakra-ui/react';

function App() {
	return (
		<GithubProvider>
			<Box className='App'>
				<Navbar />
				<Main />
			</Box>
		</GithubProvider>
	);
}

export default App;
