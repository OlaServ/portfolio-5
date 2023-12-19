import { Navbar } from '@/components/navbar/navbar';
import { getNavigation } from '@/sanity/queries/get-navigation';
import { Footer } from '@/components/footer/footer';
import { ReactNode } from 'react';

interface INavigationProps {
	children: ReactNode;
}

export const Navigation = async ({ children }: INavigationProps) => {
	const data = await getNavigation();

	return (
		<>
			<Navbar data={data} />
			{children}
			<Footer navData={data}>{children}</Footer>
		</>
	);
};
