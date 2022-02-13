import {
	VStack,
	Image,
	Heading,
	Text,
	Button,
	HStack,
	Link,
	useColorModeValue
} from '@chakra-ui/react';

import { FaBuilding, FaMapMarker, FaLink, FaUserFriends } from 'react-icons/fa';

const UserInfo = ({ user }) => {
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

	const bioTextColor = useColorModeValue('gray.600', 'gray.400')

	const textColor3 = useColorModeValue('gray.400', 'gray.600')

	return (
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
					color={textColor3}
					fontWeight='500'
				>{`@${login}`}</Heading>
			</VStack>
			<Text color={bioTextColor} fontWeight='medium'>
				{bio}
			</Text>
			<Link href={`https://github.com/${login}`} isExternal w='full'>
				<Button
					bgColor='black'
					color='white'
					w='full'
					h='70px'
					_hover={{ bgColor: '#2b2b2b' }}
					_active={{
						border: 'none',
						outline: 'none',
						color: '#000',
						bgColor: '#ececec',
					}}
					_visited={{
						border: 'none',
						outline: 'none',
					}}
				>
					Visit Profile
				</Button>
			</Link>
			<VStack color={textColor3} align='start'>
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
	);
};

export default UserInfo;
