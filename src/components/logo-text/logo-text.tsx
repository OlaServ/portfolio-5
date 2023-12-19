import { TextProps } from '@chakra-ui/react';
import { LogoTextElements as el } from './logo-text.elements';

export const LogoText = ({ ...rest }: TextProps) => {
	return (
		<el.StyledText {...rest}>
			Ola<el.Span>Serwotka</el.Span>
		</el.StyledText>
	);
};
