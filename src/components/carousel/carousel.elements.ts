import styled, { css } from 'styled-components';
import { MotionProps, motion } from 'framer-motion';

interface ICarouselImage extends MotionProps {
	type: 'current' | 'next';
}

const Container = styled(motion.div)<ICarouselImage>`
	${({ type }) => css`
		top: ${type === 'current' ? '0%' : '100%'};
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 400px;
	`}
`;

const Image = styled(motion.img)<ICarouselImage>`
	left: 0;
	width: 400px;
	height: 400px;
	object-fit: cover;
`;

export const CarouselElements = { Container, Image };
