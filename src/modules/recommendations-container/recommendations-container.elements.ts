import { Recommendation } from '@/components/recommendation/recommendation';
import { Flex, chakra, styled } from '@chakra-ui/react';
import { Blur } from '@/components/blur/blur';
import { Heading } from '@/components/typography/heading/heading';

const Container = styled(Flex, {
	baseStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		py: '80px'
	},
});

const StyledHeading = styled(Heading, {
	baseStyle: {
		color: 'primary.green',
		w: { md: '50%', base: '75%' },
		mb: '80px',
		px: '16px'
	},
});

const Span = chakra('span', {
	baseStyle: { color: 'primary.white', fontSize: 'inherit' },
});

const StyledBlur = styled(Blur, {
	baseStyle: { top: '0', w: '100%', zIndex: '100' },
});

const InnerContainer = styled(Flex, {
	baseStyle: {
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
	},
});

const StyledRecommendation = styled(Recommendation, {
	baseStyle: {
		mb: '16px',
	},
});

export const RecommendationsContainerElements = {
	StyledHeading,
	Span,
	Container,
	InnerContainer,
	StyledRecommendation,
	StyledBlur,
};
