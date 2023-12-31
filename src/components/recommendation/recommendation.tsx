'use client';
import { useState } from 'react';
import { RecommendationElements as el } from './recommendation.elements';
import { StyleProps, useBreakpointValue } from '@chakra-ui/react';
import { RecommendationDataType } from '@/domain/recommendation';
import { useRef } from 'react';
import {
	useScroll,
	useMotionValueEvent,
	useTransform,
	motionValue,
} from 'framer-motion';

interface IRecommendationProps extends StyleProps, RecommendationDataType {
	isEven: boolean;
}

export const Recommendation = ({
	author,
	text,
	isEven,
	...rest
}: IRecommendationProps) => {
	const { scrollYProgress } = useScroll();
	const [transform, setTransform] = useState('0');

	const transformationBasePercentage = useBreakpointValue({base: 15, md: 50}, {fallback: 'md'})

	const getTransformValue = (scrollYProgress: number) => {
		return isEven
			? `${Math.max(0, (1 - scrollYProgress) * (transformationBasePercentage ?? 50))}%`
			: `${Math.max(0, scrollYProgress * (transformationBasePercentage ?? 50))}%`;
	};

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		const transformValue = getTransformValue(latest);
		setTransform(transformValue);
	});
	return (
		<el.Container transform={`translateX(${transform})`} {...rest}>
			<el.UpperRow>
				<el.AuthorImage />
				<el.CompanyName>{author.company}</el.CompanyName>
			</el.UpperRow>
			<el.LowerRow>
				<el.RecommendationText>{text}</el.RecommendationText>
				<el.AuthorContainer>
					<el.AuthorName>{author.name}</el.AuthorName>
					<el.AuthorPosition> | {author.position}</el.AuthorPosition>
				</el.AuthorContainer>
			</el.LowerRow>
		</el.Container>
	);
};
