import { Flex, Box } from '@chakra-ui/react';

import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';

const Navbar = () => {
	return (
		<Flex
			flexDirection='row'
			w='full'
			justify='space-between'
			align='center'
			py='5'
			px='10'
		>
			<Logo />
			<SearchInput />
			<Box>
				<p>About</p>
			</Box>
		</Flex>
	);
};

export default Navbar;
