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
import GithubContext from '../context/GithubContext';
import { getUserData } from '../context/GithubActions';

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
		<Grid
			templateColumns='1fr 3.4fr'
			alignItems='start'
			px={10}
			pt={20}
			bgColor='#f8f8f8'
			h='100%'
		>
			{/* <Flex px='10' pt={20} bgColor='#f8f8f8' h='100vh'> */}
			<GridItem>
				<VStack align='start' maxW='18vw' spacing='8'>
					<Image
						src={avatar_url}
						alt='Dan Abramov'
						boxSize='200px'
						borderRadius='md'
					/>
					<VStack align='start' spacing='-1'>
						<Text fontWeight='900' fontSize='4xl'>
							{name}
						</Text>
						<Heading
							size='lg'
							color='gray.400'
							fontWeight='500'
						>{`@${login}`}</Heading>
					</VStack>
					<Text color='gray.600' fontWeight='medium'>
						{bio}
					</Text>
					<Button bgColor='black' color='white' w='full' h='70px'>
						Visit Profile
					</Button>
					<VStack color='gray.400' align='start'>
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
			</GridItem>
			<GridItem>
				{/* <Box pl={20}> */}
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
				{/* </Box> */}
			</GridItem>
			{/* </Flex> */}
		</Grid>
	);
};

export default User;
