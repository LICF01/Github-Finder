import { Box, Image, Text } from '@chakra-ui/react';

const UserItem = ({ user }) => {
	console.log(user);
	const { login, avatar_url } = user;
	return (
		<Box
			display={{ base: 'flex' }}
			alignItems='center'
			border='1px'
			borderColor='gray.300'
			p='3'
			m='2'
			borderRadius='md'
			transition='all .5s'
			_hover={{
				bg: 'gray.100',
			}}
			sx={{ cursor: 'pointer' }}
		>
			<Box>
				<Image
					src={avatar_url}
					alt={`${login} profile picture`}
					rounded='lg'
					boxSize='100px'
					minW='50px'
				></Image>
			</Box>
			<Box pl='5'>
				<Text fontSize='xl' fontWeight='bold' letterSpacing='wide'>
					{login}
				</Text>
				<Text mt={1} color='gray.500'>
					Visit Profile
				</Text>
			</Box>
		</Box>
	);
};

export default UserItem;
