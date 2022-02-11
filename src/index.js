import { ColorModeScript } from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/700.css';
import '@fontsource/work-sans/800.css';

import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
