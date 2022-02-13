import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const inputStyles = {
	variants: {
		flushed: (props) => ({
			field: {
				borderColor: 'transparent',
				_placeholder: {
					color: mode('gray.600', 'gray.50')(props),
				},
				_focus: {
					color: mode('gray.600', 'gray.50')(props),
					borderColor: 'gray.300',
					boxShadow: '0px 1px 0px 0px #A0AEC0',
				},
			},
		}),
	},
};

const theme = extendTheme({
	config,
	fonts: {
		heading: 'Work Sans',
		body: 'Work Sans',
	},
	components: {
		Input: {...inputStyles},
	},
});

export default theme;
