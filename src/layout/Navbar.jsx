import { Flex, Box } from '@chakra-ui/react';

import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';

const Navbar = () => {
	return (
		<Flex
			flexDirection={{
				base: 'column',
				md: 'row'
			}}
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
