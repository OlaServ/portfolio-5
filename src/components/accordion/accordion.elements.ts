import {
	styled,
	AccordionItem,
	AccordionButton,
	Heading,
	Flex,
	AccordionPanel,
	Text,
	Box,
	ListItem,
	List,
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
		background: 'secondary.blackWashed',
		_hover: {
			background: 'secondary.blackWashed',
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
		gridTemplateColumns: { lg: '1fr 1fr', sm: '1fr', base: '1fr' },
		gridTemplateRows: { lg: '1fr', sm: '1fr auto', base: '1fr auto' },
		gridGap: '16px',
	},
});

const Gallery = styled(Box, {
	baseStyle: {
		overflow: 'hidden',
		borderRadius: '14px',
		height: '400px',
		width: { md: 'auto', sm: '100%', base: '100%' },
	},
});

const Body = styled(Flex, {
	baseStyle: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
});

const BodyHeading = styled(Text, {
	baseStyle: {
		color: 'primary.gray',
		fontSize: '16px',
		lineHeight: '1.5rem',
		fontWeight: '200',
		mb: '20px',
	},
});

const StyledList = styled(List, 
	{baseStyle: {
		m: "0",
		p: 0,
	}})

const BodyListItem = styled(ListItem, {
	baseStyle: {
		color: 'primary.green',
		fontWeight: '400',
		letterSpacing: '3px',
		background: 'secondary.blackSoft',
		borderRadius: '20px',
		textAlign: 'center',
		p: '12px 14px',
		mx: '8px',
		mb: "8px",
		display: 'inline-block',
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
	BodyHeading,
	StyledList,
	BodyListItem,
	Gallery,
};
