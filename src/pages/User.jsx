import { useEffect, useContext, useState } from 'react';
import {
	Heading,
	Grid,
	GridItem,
	Flex,
	Spacer,
	useColorModeValue,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/GithubContext';
import { getUserData } from '../context/GithubActions';

import UserInfo from '../components/user/UserInfo';
import RepoItem from '../components/user/RepoCard';
import SearchRepo from '../components/SearchRepo';

import PuffLoader from 'react-spinners/PuffLoader';

const User = () => {
	const { user, repos, loading, dispatch } = useContext(GithubContext);
	const [repo, setRepo] = useState([]);
	let params = useParams();

	const bgColor = useColorModeValue('#f8f8f8', 'gray.800');

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

	if (loading) {
		return (
			<Flex justifyContent='center' align='center' h='80vh'>
				<PuffLoader size={80} />
			</Flex>
		);
	}

	return (
		<Grid
			templateColumns='1fr 3.4fr'
			alignItems='start'
			px={10}
			pt={20}
			bgColor={bgColor}
			h='100%'
		>
			<GridItem>
				<UserInfo user={user} />
			</GridItem>
			<GridItem>
				<Flex>
					<Heading>Projects</Heading>
					<Spacer />
					<SearchRepo repos={repos} getRepo={getRepo} w='xl' />
				</Flex>
				<Grid gridTemplateColumns='repeat(2, 1fr)' gap={10} my={10}>
					{repo.length === 0
						? repos.map((repo) => {
								return (
									<GridItem key={repo.id}>
										<RepoItem repo={repo} />
									</GridItem>
								);
						  })
						: repo.map((repo) => {
								return (
									<GridItem key={repo.id}>
										<RepoItem repo={repo} />
									</GridItem>
								);
						  })}
				</Grid>
			</GridItem>
		</Grid>
	);
};

export default User;
