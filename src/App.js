import { Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import { GithubProvider } from './context/GithubContext';

import { Box } from '@chakra-ui/react';

import UserResults from './components/user/UserResults';
import User from './components/user/User';

function App() {
	return (
		<GithubProvider>
			<Box className='App' h='100%'>
				<Navbar />
				<Routes>
					<Route path='/user/:login' element={<User />} />
					<Route path='/user/search' element={<UserResults />} />
				</Routes>
			</Box>
		</GithubProvider>
	);
}

export default App;
