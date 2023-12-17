'use client';
import { GridProps } from '@chakra-ui/react';
import { IAccordionProps } from '../../components/accordion/accordion';
import { AccordionContainerElements as el } from './accordions-container.elements';
import uniqid from 'uniqid';

interface IAccordionsContainerProps extends GridProps {
	data: IAccordionProps[];
}

export const AccordionsContainer = ({
	data,
	...rest
}: IAccordionsContainerProps) => {
	const accordionsContainerId = uniqid();

	return (
		<el.Container {...rest}>
			{data.map((accordionElement) => {
				const elementIndex = data.indexOf(accordionElement);
				return (
					<el.StyledAccordion
						key={`accordion-${accordionsContainerId}-${elementIndex}`}
						{...accordionElement}
					/>
				);
			})}
		</el.Container>
	);
};
