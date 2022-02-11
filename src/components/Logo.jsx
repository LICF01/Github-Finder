import { Icon, Heading, HStack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Logo = () => {
	return (
		<HStack>
			<Icon as={FaGithub} w={10} h={10} />
			<Heading size='lg'>GithubFinder</Heading>
		</HStack>
	);
};

export default Logo;
