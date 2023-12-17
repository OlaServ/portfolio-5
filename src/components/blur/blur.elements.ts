import { styled, Box } from '@chakra-ui/react';

const BlurBox = styled(Box, {
	baseStyle: {
		position: 'sticky',
		top: '0',
		height: '150px',

		_after: {
			content: '""',
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '150px',
			mask: 'linear-gradient(black, black, transparent)',

			backdropFilter: 'blur(3px)',
			zIndex: '-1',
		},
	},
});

export const BlurElements = { BlurBox };
