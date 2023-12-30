'use client';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { RecommendationsContainerElements as el } from './recommendations-container.elements';
import { Recommendation } from '@/components/recommendation/recommendation';
import { useEffect, useState } from 'react';

export const RecommendationsContainer = () => {
	const { scrollYProgress } = useScroll();
	const [transform, setTransform] = useState('0');

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		setTransform(`${latest * 100}%`);
	});

	const [isClient, setIsClient] = useState(false);
	useEffect(() => setIsClient(true), []);

	useEffect(() => {
		if (isClient) {
			setTransform(`${+scrollYProgress * 100}%`);
		}
	}, [scrollYProgress, isClient]);

	return (
		<el.Container>
			<Recommendation transform={`translateX(${transform})`} />
		</el.Container>
	);
};
