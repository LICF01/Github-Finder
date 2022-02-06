import { useEffect, useContext } from 'react';
import {
	Flex,
	VStack,
	Image,
	Heading,
	Text,
	Button,
	HStack,
} from '@chakra-ui/react';

import { FaBuilding, FaMapMarker, FaLink, FaUserFriends } from 'react-icons/fa';

import GithubContext from '../../context/GithubContext';

import { getUserData } from '../../context/GithubActions';

const User = () => {
	const { user, loading, dispatch } = useContext(GithubContext);

	useEffect(() => {
		dispatch({ type: 'SET_LOADING' });
		const getUser = async () => {
			const userData = await getUserData('');
			dispatch({ type: 'GET_USER', payload: userData });
		};

		getUser();
	}, [dispatch]);

	console.log(user);

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
		<Flex px='10'>
			<VStack align='start' w='20vw' spacing='8'>
				<Image src={avatar_url} alt='Dan Abramov' boxSize='250px' />
				<VStack align='start'>
					<Heading>{name}</Heading>
					<Heading size='lg' color='gray.400'>{`@${login}`}</Heading>
				</VStack>
				<Text color='gray.500' fontWeigh='medium'>
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
		</Flex>
	);
};

export default User;
