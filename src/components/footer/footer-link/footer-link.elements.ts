import { styled, Text } from '@chakra-ui/react';
import Link from 'next/link';

const NextLink = styled(Link, {
	baseStyle: {
		mt: '12px',
		mb: '6px',
		_hover: {
			textDecor: 'none',
		},
	},
});

const LinkText = styled(Text, {
	baseStyle: {
		color: 'primary.gray',
		textTransform: 'uppercase',
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '3px',
		transition: 'all 0.3s',
		_hover: {
			color: 'primary.green',
		},
	},
});

export const FooterLinkElements = { NextLink, LinkText };
