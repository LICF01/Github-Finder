import {
	HStack,
	Badge,
	Flex,
	Spacer,
	Heading,
	Text,
	Icon,
} from '@chakra-ui/react';

import { FiStar, FiClock } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';

import languageColors from 'language-colors';

const RepoItem = ({ repo }) => {
	const {
		name,
		description,
		priv,
		stargazers_count,
		forks_count,
		created_at,
	} = repo;

	let language = '';
	let langColor = '';
	if (repo.language) {
		language = repo.language.toLowerCase();
		langColor = `rgba(${languageColors[language].color.join(',')}, 1)`;
		console.log(langColor);
	}

	const date = new Date(created_at).toLocaleString('default', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});

	return (
		<Flex
			flexDir='column'
			justifyContent='space-between'
			bgColor='white'
			borderRadius='lg'
			overflow='hidden'
			h='100%'
			p='6'
			transition='all .2s'
			_hover={{
				boxShadow: '4px 15px 16px -2px rgba(0,0,0,0.17)',
				transform: 'translateY(-10px)',
			}}
			sx={{ cursor: 'pointer' }}
		>
			<Flex
				justifyContent='end'
				alignItems='center'
				color='gray.400'
				mb='4'
			>
				<Text borderRadius='full'>{priv ? 'Private' : 'Public'}</Text>
				<Spacer />
				<HStack>
					<Icon as={FiClock} />
					<Text>{date}</Text>
				</HStack>
			</Flex>
			<Flex justifyContent='space-Between' alignItems='center'>
				<Heading size='md'>{name}</Heading>
			</Flex>
			<Text color='gray.500' mt={3}>
				{description}
			</Text>
			<Flex mt={5}>
				<HStack>
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
				<Spacer />
				{language && (
					<Badge
						borderRadius='full'
						px='4'
						py='1'
						color='white'
						bgColor={langColor}
					>
						{language}
					</Badge>
				)}
			</Flex>
		</Flex>
	);
};

export default RepoItem;