'use client';

import { FlexProps, Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import ThemeProvider from '@/app/theme-provider';
import { Navigation } from '@/modules/navigation/navigation';

export const RouteLayout = ({ children, ...rest }: FlexProps) => {
	const pathname = usePathname();
	if (pathname.includes('admin')) {
		return <>{children}</>;
	}

	return (
		<ThemeProvider>
			<Flex
				w="100%"
				h="100%"
				display="flex"
				background="primary.black"
				flexDirection="column"
				{...rest}
			>
				<Navigation>{children}</Navigation>
			</Flex>
		</ThemeProvider>
	);
};

export default RouteLayout;
