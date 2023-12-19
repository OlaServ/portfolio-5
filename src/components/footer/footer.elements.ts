import {
	Flex,
	styled,
	Grid,
	GridItem,
	Heading,
	Text,
	chakra,
} from '@chakra-ui/react';
import { LogoText } from '../logo-text/logo-text';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Container = styled(Flex, {
	baseStyle: {
		w: '100%',
		pt: '160px',
		background: 'primary.black',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const InnerContainer = styled(Flex, {
	baseStyle: {
		p: '80px',
		flexDirection: { md: 'row', base: 'column' },
		justifyContent: { md: 'space-between', base: 'center' },
		alignItems: { md: 'flex-start', base: 'center' },
		h: '100%',
		w: '100%',
	},
});

const InnerGrid = styled(Grid, {
	baseStyle: {
		gridTemplateColumns: { md: '1fr 1fr 2fr', base: '1fr' },
		gridTemplateRows: { md: '1fr', base: '1fr 1fr 1fr' },
		gridColumnGap: { md: '70px', base: '60px' },
		gridRowGap: '40px',
	},
});

const StyledGridItem = styled(GridItem, {
	baseStyle: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: { md: 'flex-start', base: 'center' },
	},
});
const Logo = styled(LogoText, {
	baseStyle: {
		fontSize: { md: '22px' },

		w: { md: '30%', base: '100%' },
		textAlign: { md: 'left', base: 'center' },
		mb: { md: '0', base: '192px' },
	},
});

const SectionHeading = styled(Heading, {
	baseStyle: {
		color: 'primary.white',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		mb: '12px',
		fontSize: '14px !important',
		lineHeight: '16px',
		fontWeight: '700',
	},
});

const ContactItem = styled(Text, {
	baseStyle: {
		color: 'primary.white',
		letterSpacing: '3px',
		fontWeight: '200',
		lineHeight: '1.5rem',
	},
});

const ContactSpan = chakra('span', {
	baseStyle: {
		ml: '16px',
		fontSize: '14px',
		verticalAlign: 'middle',
	},
});

const EmailIcon = chakra(MdOutlineAlternateEmail, {
	baseStyle: {
		display: 'inline',
		height: '20px',
		verticalAlign: 'middle',
	},
});

export const FooterElements = {
	Logo,
	Container,
	InnerContainer,
	InnerGrid,
	StyledGridItem,
	SectionHeading,
	ContactItem,
	ContactSpan,
	EmailIcon,
};
