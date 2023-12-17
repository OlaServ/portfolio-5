import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const ChakraTheme = extendTheme({
	global: {
		html: {
			fontFamily: 'museo-sans',
		},
	},
	colors,
	fonts: {
		heading: manrope.style.fontFamily,
		body: manrope.style.fontFamily,
	},

	components: {},
});
