import { createContext, useReducer } from 'react';

const GithubContext = createContext();

export function GithubProvider({ children }) {
	const initialState = {
		user: {},
		loading: true,
	};

	const [state, dispatch] = useReducer(GithubContext, initialState);

	return (
		<GithubContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GithubContext.Provider>
	);
}

export default GithubContext;
