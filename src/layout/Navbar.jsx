import {
	Icon,
	Grid,
	GridItem,
	Button,
	HStack,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react';

import Logo from '../components/Logo';
import SearchUser from '../components/user/SearchUser';

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Grid templateColumns='1fr 2.5fr 1fr' alignItems='center' px={10}>
			<GridItem>
				<Icon as={Logo} />
			</GridItem>
			<GridItem>
				<SearchUser />
			</GridItem>
			<GridItem justifySelf='end'>
				<HStack spacing={50}>
					{colorMode === 'light' ? (
						<Button onClick={toggleColorMode}>
							{colorMode === 'light' ? 'Dark' : 'Light'}
						</Button>
					) : (
						<Button onClick={toggleColorMode}>
							{colorMode === 'light' ? 'Dark' : 'Light'}
						</Button>
					)}
					<p>About</p>
				</HStack>
			</GridItem>
		</Grid>
	);
};

export default Navbar;
