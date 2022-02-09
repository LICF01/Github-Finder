import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

export function GithubProvider({ children }) {
	const initialState = {
		user: {},
		users: [],
		repos: [],
		loading: true,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	return (
		<GithubContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GithubContext.Provider>
	);
}

export default GithubContext;
