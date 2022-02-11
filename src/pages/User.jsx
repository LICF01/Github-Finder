import { useEffect, useContext, useState } from 'react';
import { Heading, Grid, GridItem, Flex, Spacer } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/GithubContext';
import { getUserData } from '../context/GithubActions';

import UserInfo from '../components/user/UserInfo';
import RepoItem from '../components/user/RepoCard';
import SearchUser from '../components/user/SearchUser';
import SearchRepo from '../components/SearchRepo';

const User = () => {
	const { user, repos, loading, dispatch } = useContext(GithubContext);
	const [ repo, setRepo ] = useState([]);
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

	const getRepo = (repo) => {
		setRepo(repo);
	};

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
				<UserInfo user={user} />
			</GridItem>
			<GridItem>
				<Flex>
					<Heading>Projects</Heading>
					<Spacer />
					<SearchRepo repos={repos} getRepo={getRepo} />
				</Flex>
				<Grid gridTemplateColumns='repeat(2, 1fr)' gap={10} my={10}>
					{repo.length === 0
						? repos.map((repo) => {
								return (
									<GridItem>
										<RepoItem key={repo.id} repo={repo} />
									</GridItem>
								);
						  })
						: repo.map((repo) => {
								return (
									<GridItem>
										<RepoItem key={repo.id} repo={repo} />
									</GridItem>
								);
						  })
					}
				</Grid>
			</GridItem>
		</Grid>
	);
};

export default User;
