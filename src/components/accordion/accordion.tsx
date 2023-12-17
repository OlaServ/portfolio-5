'use client';
import {
	AccordionButtonProps,
	AccordionProps,
	Accordion as ChakraAccordion,
	useBreakpointValue,
} from '@chakra-ui/react';
import { AccordionElements as el } from './accordion.elements';
import { Carousel } from '../carousel/carousel';
import useScroll from '@/hooks/useScroll';
import { useEffect, useRef, useState } from 'react';

export interface IAccordionProps extends AccordionProps {
	heading: string;
	body: {
		heading: string;
		text: string;
	};
	imageUrls: string[];
}

export const Accordion = ({
	heading,
	body,
	imageUrls,
	...rest
}: IAccordionProps) => {
	const expandAccordion = useBreakpointValue({ lg: true, base: false });
	const mobileProps = !expandAccordion ? { index: 0 } : {};

	return (
		<ChakraAccordion allowToggle {...mobileProps} {...rest}>
			<el.Item>
				<el.Button>
					<el.ButtonText transition="filter 0.3s linear">
						{heading}
					</el.ButtonText>
					{expandAccordion && (
						<el.Circle>
							<el.Line transform="rotate(90deg)" className="top-line" />
							<el.Line transitionDelay="0.1s" />
						</el.Circle>
					)}
				</el.Button>
				<el.Panel>
					<el.Gallery flexDirection="row">
						<Carousel imageUrls={imageUrls} />
					</el.Gallery>
					<el.Body>
						<el.BodyHeading>{body.heading}</el.BodyHeading>
						<el.BodyText>{body.text}</el.BodyText>
					</el.Body>
				</el.Panel>
			</el.Item>
		</ChakraAccordion>
	);
};
