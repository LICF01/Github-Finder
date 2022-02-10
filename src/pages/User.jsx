import { useEffect, useContext } from 'react';
import {
	Heading,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/GithubContext';
import { getUserData } from '../context/GithubActions';

import UserInfo from '../components/user/UserInfo'
import RepoItem from '../components/user/RepoCard';

const User = () => {
	const { user, repos, loading, dispatch } = useContext(GithubContext);
	let params = useParams();

	useEffect(() => {
		dispatch({ type: 'SET_LOADING' });
		const getUser = async () => {
			const userData = await getUserData(params.login);
			console.log(userData);
			dispatch({ type: 'GET_USER', payload: userData });
		};

		getUser();
	}, [dispatch, params.login]);


	if (loading) return <p>Loading...</p>;

	return (
		<Grid
			templateColumns='1fr 3.4fr'
			alignItems='start'
			px={10}
			pt={20}
			bgColor='#f8f8f8'
			h='100%'
		>
			<GridItem>
				<UserInfo user={user}/>
			</GridItem>
			<GridItem>
				<Heading>Projects</Heading>
				<Grid gridTemplateColumns='repeat(2, 1fr)' gap={10} my={10}>
					{repos.map((repo) => {
						return (
							<GridItem>
								<RepoItem key={repo.id} repo={repo} />
							</GridItem>
						);
					})}
				</Grid>
			</GridItem>
		</Grid>
	);
};

export default User;
