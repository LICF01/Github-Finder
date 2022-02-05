import Navbar from './layout/Navbar';
import { GithubProvider } from './context/GithubContext';
import Main from './layout/Main';

function App() {
	return (
		<GithubProvider>
			<div className='App'>
				<Navbar />
				<Main />
			</div>
		</GithubProvider>
	);
}

export default App;
