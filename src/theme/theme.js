import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	fonts: {
		heading: 'Work Sans',
		body: 'Work Sans',
	},
});

export default theme;
