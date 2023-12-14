'use client';
import { AccordionProps, Accordion as ChakraAccordion } from '@chakra-ui/react';
import { AccordionElements as el } from './accordion.elements';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import uniqid from 'uniqid';

interface IAccordionProps extends AccordionProps {
	heading: string;
	body: string;
	imageUrls: string[];
}

export const Accordion = ({
	heading,
	body,
	imageUrls,
	...rest
}: IAccordionProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNextImage = () =>
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 <= imageUrls.length - 1 ? prevIndex + 1 : 0,
		);

	useEffect(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 <= imageUrls.length - 1 ? prevIndex + 1 : 0,
		);
	}, []);

	useEffect(() => console.log(currentIndex), [currentIndex]);

	useEffect(() => {
		const intervalId = setInterval(handleNextImage, 4000);
		return () => clearInterval(intervalId);
	}, [currentIndex]);

	return (
		<ChakraAccordion allowMultiple {...rest}>
			<el.Item>
				<el.Button>
					<el.ButtonText>Section 1 title</el.ButtonText>
					<el.Circle>
						<el.Line transform="rotate(90deg)" className="top-line" />
						<el.Line transitionDelay="0.1s" />
					</el.Circle>
				</el.Button>
				<el.Panel>
					<el.Gallery flexDirection="row">
						<AnimatePresence initial={false}>
							{imageUrls.map(
								(imageUrl, index) =>
									index === currentIndex && (
										<React.Fragment key={uniqid()}>
											<motion.img
												key={`image-current-${uniqid()}`}
												src={imageUrl}
												alt={`Slide ${index}`}
												initial={{ y: '0%' }}
												animate={{ y: '-100%' }}
												exit={{ y: '-100%' }}
												transition={{ duration: 4, ease: 'linear' }}
												style={{
													position: 'absolute',
													top: 0,
													left: 0,
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
											/>

											<motion.img
												key={`image-next-${uniqid()}`}
												src={
													imageUrls[
														currentIndex + 1 <= imageUrls.length - 1
															? currentIndex + 1
															: 0
													]
												}
												alt={`Slide ${index}`}
												initial={{ y: '0%' }}
												animate={{ y: '-100%' }}
												exit={{ y: '-100%' }}
												transition={{ duration: 4, ease: 'linear' }}
												style={{
													position: 'absolute',
													top: '100%',
													left: 0,
													width: '100%',
													height: '100%',
													objectFit: 'cover',
												}}
											/>
										</React.Fragment>
									),
							)}
						</AnimatePresence>
					</el.Gallery>
					<el.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</el.Body>
				</el.Panel>
			</el.Item>
		</ChakraAccordion>
	);
};
