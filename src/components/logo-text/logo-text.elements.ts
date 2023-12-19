import { Text, chakra, styled } from '@chakra-ui/react';

const StyledText = styled(Text, {
	baseStyle: {
		display: 'block',
		textTransform: 'uppercase',
		color: 'primary.gray',
		fontWeight: 900,
	},
});

const Span = chakra('span', {
	baseStyle: {
		color: 'primary.white',
	},
});

export const LogoTextElements = {
	StyledText,
	Span,
};
