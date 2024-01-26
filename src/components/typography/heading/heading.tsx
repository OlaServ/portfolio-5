import { HeadingProps } from '@chakra-ui/react';
import { HeadingElements as el } from './heading.elements';

interface IHeadingProps extends HeadingProps {
	type: 'h1' | 'h2';
}
export const Heading = ({ type, children, ...rest }: IHeadingProps) => {
	switch (type) {
		case 'h1':
			return <el.HeadingOne {...rest}>{children}</el.HeadingOne>;
		case 'h2':
			return <el.HeadingTwo {...rest}>{children}</el.HeadingTwo>;
		default:
			return <el.HeadingOne {...rest}>{children}</el.HeadingOne>;
	}
};
