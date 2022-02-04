export default function GithubReducer(state, action) {
	switch (action.type) {
		case 'SET_LOADING':
			return {...state, loading: true}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}
