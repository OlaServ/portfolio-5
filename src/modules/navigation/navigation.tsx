import { Navbar } from '@/components/navbar/navbar';
import { getNavigation } from '@/sanity/queries/get-navigation';
import { Footer } from '@/components/footer/footer';
import { ReactNode } from 'react';
import { getContactData } from '@/sanity/queries/get-contact-data';

interface INavigationProps {
	children: ReactNode;
}

export const Navigation = async ({ children }: INavigationProps) => {
	const navData = await getNavigation();
	const contactData = await getContactData();

	return (
		<>
			<Navbar data={navData} />
			{children}
			<Footer navData={navData} contactData={contactData[0]}>{children}</Footer>
		</>
	);
};
