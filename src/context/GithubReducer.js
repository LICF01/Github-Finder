export default function GithubReducer(state, action) {
	switch (action.type) {
		case 'SET_LOADING':
			return { ...state, loading: true };
		case 'GET_USER':
			return { ...state, user: action.payload.user, loading: false };
		case 'GET_USERS':
			return { ...state, users: action.payload, loading: false };
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}
