import {
	Flex,
	Image,
	Grid,
	Card,
	styled,
	Text,
	Button,
} from '@chakra-ui/react';
import { Heading } from '../typography/heading/heading';
import { BodyText } from '../typography/body-text/body-text';

const Container = styled(Flex, {
	baseStyle: {
		h: { md: '110vh', base: 'auto' },
		w: '100%',
		pl: { md: '80px', sm: '20px', base: '20px' },
		pr: '20px',
		pt: '20px',
		pb: '20px',

		alignItems: 'flex-start',
		justifyContent: {
			md: 'space-between',
			sm: 'flex-start',
			base: 'flex-start',
		},
		mt: '0',
		overflow: 'hidden',
		flexDirection: {
			md: 'row',
			sm: 'column',
			base: 'column',
		},
		background: 'secondary.blackSoft',
	},
});

const LeftColumn = styled(Flex, {
	baseStyle: {
		width: { md: '50%', sm: '100%', base: '100%' },
		height: { md: '85%', base: 'auto' },
		justifyContent: 'center',
		flexDirection: 'column',
	},
});

const TextContainer = styled(Flex, {
	baseStyle: {
		width: '90%',
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		pb: { md: '0', base: '20px' },
	},
});

const HeadingOne = styled(Heading, {
	baseStyle: {
		color: 'primary.green',
	},
});

const HeadingTwo = styled(Heading, {
	baseStyle: {
		color: 'white',
		mb: '48px',
	},
});

const RightColumn = styled(Grid, {
	baseStyle: {
		width: { md: '50%', sm: '100%', base: '100%' },
		height: { md: '85%', base: 'auto' },
		gridTemplateRows: { md: '70% 30%', base: 'auto auto' },
		gridTemplateColumns: '1fr 1fr',
		gridGap: '20px',
	},
});

const MainPhoto = styled(Card, {
	baseStyle: {
		gridColumn: 'span 2',
		backgroundPosition: '50% 20%',
		backgroundSize: 'cover',
		borderRadius: '14px',
		overflow: 'hidden',
		height: { md: 'auto', base: '100%' },
		minH: '62vh',
	},
});

const SecondaryPhoto = styled(Image, {
	baseStyle: {
		borderRadius: '14px',
		objectFit: 'cover',
		width: '100%',
		height: { md: '100%', base: '100%' },
	},
});

const Body = styled(BodyText, {
	baseStyle: {
		color: 'white',
	},
});

const RecommendationsCard = styled(Card, {
	baseStyle: {
		backgroundColor: 'primary.green',
		borderRadius: '14px',
		minHeight: { md: '100%', base: '30vh' },
		width: '100%',
		p: '12px',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

const RecommendationCardText = styled(Text, {
	baseStyle: {
		fontSize: { md: '24px', sm: "24px", base: '18px' },
		hyphens: 'auto',
		p: '20px',
		maxW: '100%',
		color: 'primary.black',
		lineHeight: '2rem',
		fontWeight: '200',
	},
});

//todo: make generic, move to theme
const RecommendationsButton = styled(Button, {
	baseStyle: {
		width: '100%',
		height: '36px',
		boxSizing: 'border-box',
		color: 'primary.green',
		textTransform: 'uppercase',
		background: 'secondary.blackSoft',
		borderRadius: '20px',
		letterSpacing: '3px',
		p: '8px 16px',
		fontSize: '14px',
		lineHeight: '20px',
		transition: 'all 0.3s linear',
		_hover: {
			color: 'white',
			background: 'secondary.blackSoft',
		},
	},
});

export const HeroElements = {
	Container,
	TextContainer,
	LeftColumn,
	MainPhoto,
	SecondaryPhoto,
	HeadingOne,
	HeadingTwo,
	Body,
	RightColumn,
	RecommendationsCard,
	RecommendationCardText,
	RecommendationsButton,
};
