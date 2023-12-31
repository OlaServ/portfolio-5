import { Recommendation } from '@/components/recommendation/recommendation';
import { Flex, styled } from '@chakra-ui/react';

const Container = styled(Flex, {
	baseStyle: {
		flexDirection: 'column',
		width: { base: '100%', md: '50%' },
	},
});

const StyledRecommendation = styled(Recommendation, {
	baseStyle: {
		mb: '16px',
	},
});

export const RecommendationsContainerElements = {
	Container,
	StyledRecommendation,
};
