import Navbar from './layout/Navbar';
import Main from './layout/Main';
import { GithubProvider } from './context/GithubProvider';

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
