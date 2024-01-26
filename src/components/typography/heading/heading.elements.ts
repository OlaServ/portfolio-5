import { Heading as ChakraHeading, styled } from '@chakra-ui/react';

const HeadingOne = styled(ChakraHeading, {
	baseStyle: {
		fontSize: { md: '68px', sm: '62px', base: '54px' },
		lineHeight: { md: '78px', sm: '72px', base: '64px' },
		fontWeight: '200',
	},
});

const HeadingTwo = styled(ChakraHeading, {
	baseStyle: {
		fontSize: '32px',
		lineHeight: '40px',
		fontWeight: '200',
	},
});

export const HeadingElements = { HeadingOne, HeadingTwo };
