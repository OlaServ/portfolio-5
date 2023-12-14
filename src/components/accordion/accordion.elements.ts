import {
	styled,
	AccordionItem,
	AccordionButton,
	Heading,
	Flex,
	AccordionPanel,
	Text,
	Box,
} from '@chakra-ui/react';
import { AnimatedBox } from '../animated-box/animated-box';

const Item = styled(AccordionItem, {
	baseStyle: {
		border: 'none',
		background: 'secondary.blackWashed',
		borderRadius: '52px',
		overflow: 'hidden',
	},
});

const Button = styled(AccordionButton, {
	baseStyle: {
		p: '16px 16px 16px 32px',
		boxSizing: 'border-box',
		zIndex: 10,
		height: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		_hover: {
			'.top-line': {
				mb: '8px',
				transform: 'rotate(0deg)',
			},
		},
	},
});

const ButtonText = styled(Heading, {
	baseStyle: {
		color: 'white',
		fontWeight: '200',
		fontSize: '32px',
	},
});

const Circle = styled(Flex, {
	baseStyle: {
		background: 'primary.green',
		borderRadius: 'full',
		justifyContent: 'center',
		alignItems: 'center',
		boxSize: '70px',
		flexDir: 'column',
	},
});

const Line = styled(AnimatedBox, {
	baseStyle: {
		background: 'primary.black',
		height: '1px',
		width: '22px',
		transition: 'all 0.4s linear',
	},
});

const Panel = styled(AccordionPanel, {
	baseStyle: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridGap: '16px',
	},
});

const Gallery = styled(Box, {
	baseStyle: {
		overflow: 'hidden',
		height: '400px',
		pos: 'relative',
		borderRadius: '14px',
	},
});

const Body = styled(Text, {
	baseStyle: {
		color: 'primary.gray',
		fontSize: '16px',
		lineHeight: '1.5rem,',
		fontWeight: '200',
	},
});

const Track = styled(AnimatedBox, {
	baseStyle: {
		display: 'flex',
		position: 'absolute',
		left: '0',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '16px',
		width: '200%',
		height: '100%',
	},
});

const GalleryItem = styled(Flex, {
	baseStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
});

export const AccordionElements = {
	Item,
	Button,
	ButtonText,
	Circle,
	Line,
	Panel,
	Body,
	Gallery,
	Track,
	GalleryItem,
};
