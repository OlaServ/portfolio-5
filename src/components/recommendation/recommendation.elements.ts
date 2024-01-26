import { Flex, styled, Avatar, Text, chakra } from '@chakra-ui/react';

const Container = styled(Flex, {
	baseStyle: {
		bg: 'secondary.blackSoft',
		w: { base: '90%', md: '66%' },
		maxW: '780px',
		h: 'auto',
		minH: '325px',
		borderRadius: '14px',
		p: '24px',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
});

const UpperRow = styled(Flex, {
	baseStyle: {
		w: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		pb: '24px',
		boxSizing: 'border-box',
		borderBottom: '1px solid',
		borderColor: 'primary.black',
		h: '92px',
	},
});

const CompanyName = styled(Text, {
	baseStyle: {
		color: 'primary.white',
		fontSize: '12px',
		fontWeight: '900',
	},
});

const AuthorImage = styled(Avatar, {
	baseStyle: {
		boxSize: '70px',
		borderRadius: 'full',
	},
});

const LowerRow = styled(Flex, {
	baseStyle: {
		flexDirection: 'column',
		pt: '24px',
		justifyContent: 'center',
	},
});

const RecommendationText = styled(Text, {
	baseStyle: {
		fontSize: '26px',
		fontWeight: '200',
		color: 'primary.white',
		lineHeight: '38px',
	},
});

const AuthorContainer = styled(Flex, {
	baseStyle: {
		alignItems: {base: 'flex-start', md: 'center'},
		py: '24px',
		flexWrap: 'wrap'
	
	},
});

const AuthorName = styled(Text, {
	baseStyle: {
		color: 'primary.green',
		fontWeight: 'bold',
		fontSize: '16px',
	
	},
});

const AuthorPosition = chakra('span', {
	baseStyle: {
		color: 'primary.gray',
		whiteSpace: 'pre',
	
	},
});

export const RecommendationElements = {
	Container,
	UpperRow,
	AuthorImage,
	CompanyName,
	LowerRow,
	RecommendationText,
	AuthorContainer,
	AuthorName,
	AuthorPosition,
};
