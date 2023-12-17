import { Accordion } from '@/components/accordion/accordion';
import { Grid, styled } from '@chakra-ui/react';

const Container = styled(Grid, {
	baseStyle: {
		gap: '16px',
		gridTemplateColumns: { lg: '1fr 1fr', base: '1fr' },
		pt: "0",
		pb: '100px',
		px: { md: '80px', base: '16px' },
	},
});

const StyledAccordion = styled(Accordion, {
    baseStyle: {
        w: "100%"
    }
})

export const AccordionContainerElements = { Container, StyledAccordion };
