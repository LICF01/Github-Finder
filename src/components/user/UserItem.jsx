import {
	Box,
	Button,
	Avatar,
	Heading,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react';

const UserItem = ({ user }) => {
	console.log(user);
	const { login, avatar_url } = user;
	return (
		<Box
			border='1px'
			borderColor='gray.300'
			p='5'
			m='2'
			borderRadius='md'
			transition='all .5s'
			_hover={{
				bg: 'gray.100',
			}}
		>
			<HStack>
				<Avatar
					name={login}
					src={avatar_url}
					borderRadius='md'
					size='xl'
				/>
				<VStack align='start' pl='5'>
					<Heading size='lg'>{login}</Heading>
					<Text>Visit Profile</Text>
				</VStack>
			</HStack>
		</Box>
	);
};

export default UserItem;
