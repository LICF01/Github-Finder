import { useEffect, useContext } from 'react';
import {
	VStack,
	Image,
	Button,
	HStack,
	Box,
	Badge,
	Flex,
	Heading,
	Text,
	Icon,
} from '@chakra-ui/react';

import { FiStar } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';

const RepoItem = ({ repo }) => {
	const { name, description, priv, language, stargazers_count, forks_count } =
		repo;

	return (
		<Box
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			p='6'
			transition='all .2s'
			_hover={{
				boxShadow: '4px 15px 16px -2px rgba(0,0,0,0.17)',
				transform: 'translateY(-10px)',
			}}
			sx={{ cursor: 'pointer' }}
		>
			<Flex justifyContent='space-Between' alignItems='center'>
				<Heading size='md'>{name}</Heading>
				<Badge borderRadius='full' px='2' py='1' colorScheme='teal'>
					{priv ? 'Private' : 'Public'}
				</Badge>
			</Flex>
			<Text color='gray.500' mt={3}>
				{description}
			</Text>
			<HStack mt={5}>
				{language && (
					<Badge borderRadius='full' px='4' py='1'>
						{language}
					</Badge>
				)}
				<Flex alignItems='center'>
					<Icon as={FiStar} color='gray.500' />
					<Text mx='1' color='gray.500'>
						{stargazers_count}
					</Text>
				</Flex>
				<Flex alignItems='center'>
					<Icon as={BiGitRepoForked} color='gray.500' />
					<Text mx='1' color='gray.500'>
						{forks_count}
					</Text>
				</Flex>
			</HStack>
		</Box>
	);
};

export default RepoItem;
