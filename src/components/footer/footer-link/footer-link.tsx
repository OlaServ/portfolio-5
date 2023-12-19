'use client';
import { FooterLinkElements as el } from './footer-link.elements';
import { TextProps } from '@chakra-ui/react';

/* todo: join with NavLink; add a variant prop */

interface IFooterLinkProps extends TextProps {
	slug: string;
	text: string;
}

export const FooterLink = ({ slug, text, ...rest }: IFooterLinkProps) => {
	return (
		<el.NextLink href={slug} {...rest}>
			<el.LinkText>{text}</el.LinkText>
		</el.NextLink>
	);
};
