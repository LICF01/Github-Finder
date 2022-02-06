import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
	baseURL: GITHUB_URL,
	headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const getUserData = async (login) => {
	const user = await github.get(`/users/${login}`);

	return { user: user.data };
};

export const searchUsers = async (user) => {

	const users = await github.get(`/search/users?q=${user}`);

	return users.data.items;
};
