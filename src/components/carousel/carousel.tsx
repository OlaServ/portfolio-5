'use client';
import React, { useMemo } from 'react';
import uniqid from 'uniqid';
import { CarouselElements as el } from './carousel.elements';
import { useState, useEffect } from 'react';

interface ICarouselProps {
	imageUrls: string[];
}

export const Carousel: React.FC<ICarouselProps> = React.memo(
	({ imageUrls }) => {
		const numberOfImages = imageUrls.length;

		const [currentIndex, setCurrentIndex] = useState(0);

		const [animateKey, setAnimateKey] = useState(uniqid());

		useEffect(() => {
			setAnimateKey(uniqid());
		}, [currentIndex]);

		const handleNextImage = () => {
			setCurrentIndex((prevIndex) =>
				prevIndex + 1 <= numberOfImages - 1 ? prevIndex + 1 : 0,
			);
		};

		useEffect(() => {
			const intervalId = setInterval(handleNextImage, 8000);
			return () => clearInterval(intervalId);
		}, [currentIndex]);

		const imageAnimationVariants = {
			initial: { y: '0%' },
			slideUp: { y: '-100%' },
		};

		const imageAnimationProps = {
			variants: imageAnimationVariants,
			initial: 'initial',
			animate: 'slideUp',
			exit: 'slideUp',
			transition: { duration: 8, ease: 'linear' },
		};

		const isSingleImage = numberOfImages === 1;

		return (
			<>
				{imageUrls.map((imageUrl, index) => {
					if (index !== currentIndex) return null;

					return (
						<React.Fragment key={uniqid()}>
							<el.Container
								{...(isSingleImage ? {} : { ...imageAnimationProps })}
								type="current"
								style={{
									background: `rgba(0, 0, 0, 0.2)`,
								}}
								key={`current-${animateKey}`}
							>
								<el.Image src={imageUrl} alt={`Slide ${index}`} />
							</el.Container>

							{!isSingleImage && (
								<el.Container
									type="next"
									key={`next-${animateKey}`}
									style={{
										background: `rgba(0, 0, 0, 0.2)`,
									}}
									{...imageAnimationProps}
								>
									<el.Image
										src={imageUrls[(currentIndex + 1) % numberOfImages]}
										alt={`Slide ${index}`}
									/>
								</el.Container>
							)}
						</React.Fragment>
					);
				})}
			</>
		);
	},
);
