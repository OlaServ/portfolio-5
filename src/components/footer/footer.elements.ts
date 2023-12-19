import {
	Flex,
	styled,
	Grid,
	GridItem,
	Heading,
	Text,
	chakra,
	Icon,
} from '@chakra-ui/react';
import { LogoText } from '../logo-text/logo-text';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import Link from 'next/link';

const Container = styled(Flex, {
	baseStyle: {
		w: '100%',
		pt: '160px',
		background: 'primary.black',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
});

const InnerContainer = styled(Flex, {
	baseStyle: {
		p: '80px',
		pb: { md: '80px', base: 0 },
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
		mb: { md: '0', base: '100px' },
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
		height: '1.5rem',
		display: 'flex',
		justifyContent: 'center',
	},
});

const ContactSpan = chakra('span', {
	baseStyle: {
		ml: '16px',
		fontSize: '14px',
	},
});

const EmailIcon = chakra(MdOutlineAlternateEmail, {
	baseStyle: {
		display: 'inline-block',
		height: '20px',
	},
});

const Bottom = styled(Flex, {
	baseStyle: {
		pb: '80px',
		px: '80px',
		pt: { md: '80px', base: '0px' },
		w: '100%',
		justifyContent: { md: 'space-between', base: 'center' },
		alignItems: 'center',
		flexDirection: { md: 'row', base: 'column-reverse' },
	},
});

const Attribution = styled(Text, {
	baseStyle: {
		fontSize: '14px',
		color: 'primary.white',
		display: 'block',
		mt: { md: '0', base: '80px' },
	},
});

const AttributionLink = styled(Link, {
	baseStyle: {
		color: 'primary.green',
		_hover: {
			color: 'primary.white',
			textDecor: 'none',
		},
	},
});

const ContactsContainer = styled(Flex, {
	baseStyle: {
		flexDirection: { md: 'row', base: 'column' },
		gridColumnGap: '12px',
		alignItems: 'center',
	},
});

const ContactsHeading = styled(SectionHeading, {
	baseStyle: {
		color: '#969696',
		my: { md: '0', base: '20px' },
	},
});

const IconsContainer = styled(Grid, {
	baseStyle: {
		gridTemplateColumns: '1fr 1fr',
		gridColumnGap: '8px',
	},
});

const ContactIcon = styled(Icon, {
	baseStyle: {
		color: 'white',
		height: '24px',
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
	Bottom,
	Attribution,
	AttributionLink,
	ContactIcon,
	ContactsContainer,
	ContactsHeading,
	IconsContainer,
};
