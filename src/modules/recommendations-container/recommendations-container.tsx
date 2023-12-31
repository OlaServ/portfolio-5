'use client';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { RecommendationsContainerElements as el } from './recommendations-container.elements';
import { createRef, useEffect, useRef, useState } from 'react';
import { FlexProps } from '@chakra-ui/react';
import { RecommendationDataType } from '@/domain/recommendation';

interface IRecommendationsContainerProps extends FlexProps {
	recommendations: RecommendationDataType[];
}

export const RecommendationsContainer = ({
	recommendations,
	...rest
}: IRecommendationsContainerProps) => {
	const isIndexEven = (index: number) => {
		return index % 2 === 0 ? true : false;
	};

	return (
		<el.Container {...rest}>
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
		</el.Container>
	);
};
