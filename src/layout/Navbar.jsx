import { Flex, Box, Icon, Grid, GridItem } from '@chakra-ui/react';

import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';

const Navbar = () => {
	return (
		<Grid templateColumns='1fr 2.5fr 1fr' alignItems='center' px={10}>
			<GridItem>
				<Icon as={Logo} />
			</GridItem>
			<GridItem>
				<SearchInput />
			</GridItem>
			<GridItem justifySelf='end'>
				<p>About</p>
			</GridItem>
		</Grid>
	);
};

export default Navbar;
