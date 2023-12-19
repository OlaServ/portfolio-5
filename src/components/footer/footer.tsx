import { Flex, Text, Grid } from '@chakra-ui/react';
import Link from 'next/link';
import { basePath } from '../../../sanity.config';
import { FooterElements as el } from './footer.elements';
import { LogoText } from '../logo-text/logo-text';

export const Footer = () => {
	return (
		<Flex
			w="100%"
			pt="160px"
			background="primary.black"
			justifyContent="center"
			alignItems="center"
		>
			<Flex
				p="80px"
				flexDirection={{ md: 'row', base: 'column' }}
				justifyContent={{ md: 'space-between', base: 'center' }}
				h="100%"
				w="100%"
			>
				<el.Logo  />

				<Grid
					gridTemplateColumns={{ md: '1fr 1fr 1fr', base: '1fr' }}
					gridTemplateRows={{ md: '1fr', base: '1fr 1fr 1fr' }}
					gridColumnGap={{ md: '70px', base: '60px' }}
					gridRowGap="40px"
					w={{ md: '70%', base: '100%' }}
				>
					<Flex
						direction="column"
						textTransform="uppercase"
						color="primary.gray"
					>
						<Text color="primary.white">Pages</Text>
						<Link href="#">Home</Link>
						<Link href="#">About</Link>
					</Flex>

					<Flex
						direction="column"
						textTransform="uppercase"
						color="primary.gray"
					>
						<Text color="primary.white">Admin</Text>
						<Link href={basePath}>Sanity Studio</Link>
					</Flex>

					<Flex flexDirection="column">
						<Text color="primary.white" textTransform="uppercase">
							Contact
						</Text>
					</Flex>
				</Grid>
			</Flex>
		</Flex>
	);
};
