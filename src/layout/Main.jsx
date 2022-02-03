import { Flex, VStack, Image, Heading } from '@chakra-ui/react';

const Main = () => {
	return (
		<Flex px='10'>
			<VStack align='start'>
				<Image
					src='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					boxSize='250px'
				/>
				<Heading>Dan Abramov</Heading>
				<Heading size='lg'>@DanAbramov</Heading>
			</VStack>
		</Flex>
	);
};

export default Main;
