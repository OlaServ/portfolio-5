'use client';
import {
	AccordionProps,
	Accordion as ChakraAccordion,
	useBreakpoint,
	useBreakpointValue,
} from '@chakra-ui/react';
import { AccordionElements as el } from './accordion.elements';
import { Carousel } from '../carousel/carousel';
import { useEffect } from 'react';

export interface IAccordionProps extends AccordionProps {
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
	const expandAccordion = useBreakpointValue({ lg: true, base: false });

	const mobileProps = !expandAccordion ? { index: 0 } : {};

	return (
		<ChakraAccordion allowToggle {...mobileProps} {...rest}>
			<el.Item>
				<el.Button>
					<el.ButtonText>{heading}</el.ButtonText>
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
					<el.Body>{body}</el.Body>
				</el.Panel>
			</el.Item>
		</ChakraAccordion>
	);
};
