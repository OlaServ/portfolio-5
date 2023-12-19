import { TextProps } from '@chakra-ui/react';
import { NavLinkElements as el } from './nav-link.elements';

interface INavLinkProps extends TextProps {
	slug: string;
	text: string;
}
export const NavLink = ({ slug, text, ...rest }: INavLinkProps) => {
	return (
		<el.NextLink href={slug} {...rest}>
			<el.LinkText>{text}</el.LinkText>
		</el.NextLink>
	);
};
