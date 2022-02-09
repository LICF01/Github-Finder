import { useEffect, useContext } from 'react';
import {
	Flex,
	VStack,
	Image,
	Heading,
	Text,
	Button,
	HStack,
	Box,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { FaBuilding, FaMapMarker, FaLink, FaUserFriends } from 'react-icons/fa';
import GithubContext from '../../context/GithubContext';
import { getUserData, getLanguageColors } from '../../context/GithubActions';

import RepoItem from './RepoItem';

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

	const {
		name,
		avatar_url,
		login,
		bio,
		location,
		company,
		blog,
		followers,
		following,
	} = user;

	if (loading) return <p>Loading...</p>;

	return (
		<Flex px='10' bgColor='#f8f8f8'>
			<VStack align='start' w='30vw' spacing='8'>
				<Image src={avatar_url} alt='Dan Abramov' boxSize='250px' />
				<VStack align='start'>
					<Text fontWeight='900' fontSize='4xl'>
						{name}
					</Text>
					<Heading size='lg' color='gray.400'>{`@${login}`}</Heading>
				</VStack>
				<Text color='gray.500' fontWeight='medium'>
					{bio}
				</Text>
				<Button bgColor='black' color='white' w='full' h='70px'>
					Visit Profile
				</Button>
				<VStack color='gray.500' align='start'>
					<HStack>
						<FaUserFriends />
						<Text>
							Followers: {followers} / Following: {following}
						</Text>
					</HStack>
					<HStack>
						<FaBuilding />
						<Text>{company}</Text>
					</HStack>
					<HStack>
						<FaMapMarker />
						<Text>{location}</Text>
					</HStack>
					<HStack>
						<FaLink />
						<Text>{blog}</Text>
					</HStack>
				</VStack>
			</VStack>
			<Box pl={20}>
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
			</Box>
		</Flex>
	);
};

export default User;
