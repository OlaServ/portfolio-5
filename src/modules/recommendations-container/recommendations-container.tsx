'use client';
import { RecommendationsContainerElements as el } from './recommendations-container.elements';
import { FlexProps } from '@chakra-ui/react';
import { RecommendationDataType } from '@/domain/recommendation';

interface IRecommendationsContainerProps extends FlexProps {
	recommendations: RecommendationDataType[];
	heading: string;
}

export const RecommendationsContainer = ({
	recommendations,
	heading,
	...rest
}: IRecommendationsContainerProps) => {
	const isIndexEven = (index: number) => {
		return index % 2 === 0 ? true : false;
	};
	
	const divideString = (inputString: string): { firstFiveWords: string; restOfString: string } => {
		const words = inputString.split(/\s+/);
		const firstFiveWords = words.slice(0, 5).join(' ')
		const restOfString = words.slice(5).join(' ');
	
		return {
			firstFiveWords,
			restOfString
		};
	}

	const {firstFiveWords, restOfString} = divideString(heading)

	return (
		<>
			<el.StyledBlur/>
			<el.Container {...rest}>
				<el.StyledHeading type="h2"><el.Span>{firstFiveWords}</el.Span>{restOfString}</el.StyledHeading>
	
				<el.InnerContainer>
					{recommendations.map((recommendation, index) => {
						const isEven = isIndexEven(index);

						return (
							<el.StyledRecommendation
								key={`recommendation-${index}`}
								isEven={isEven}
								{...recommendation}
							/>
						);
					})}
				</el.InnerContainer>
			</el.Container>
		</>
	);
};
