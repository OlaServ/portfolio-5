'use client';
import { basePath } from '../../../sanity.config';
import { FooterElements as el } from './footer.elements';
import { FooterLink } from './footer-link/footer-link';
import { Flex, FlexProps, Grid } from '@chakra-ui/react';
import { NavigationType } from '@/domain/navigation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ContactDataType } from '@/domain/contact-data';
import Link from 'next/link';

interface IFooterProps extends FlexProps {
	navData: NavigationType;
	contactData: ContactDataType;
}

export const Footer = ({ navData, contactData, ...rest }: IFooterProps) => {
	const { email, gitHub, linkedIn } = contactData;

	return (
		<el.Container {...rest}>
			<el.InnerContainer>
				<el.Logo />

				<el.InnerGrid>
					<el.StyledGridItem textTransform="uppercase" color="primary.gray">
						<el.SectionHeading>Pages</el.SectionHeading>
						{navData[0].mainNav.items.map((item) => {
							return (
								<FooterLink
									text={item.text}
									slug={item.navigationItemUrl.internalLink.slug.current}
									key={`${item.navigationItemUrl.internalLink.slug.current}-mobile`}
								/>
							);
						})}
					</el.StyledGridItem>

					<el.StyledGridItem textTransform="uppercase" color="primary.gray">
						<el.SectionHeading>Admin</el.SectionHeading>
						<FooterLink slug={basePath} text="Sanity Studio" />
					</el.StyledGridItem>

					<el.StyledGridItem>
						<el.SectionHeading>Contact</el.SectionHeading>
						<el.ContactItem>
							<el.EmailIcon /> <el.ContactSpan>{email}</el.ContactSpan>
						</el.ContactItem>
					</el.StyledGridItem>
				</el.InnerGrid>
			</el.InnerContainer>
			<el.Bottom>
				<el.Attribution>
					Design by{' '}
					<el.AttributionLink href="https://www.jaromin.co/">
						Jaromin & Co.
					</el.AttributionLink>
				</el.Attribution>
				<el.ContactsContainer>
					<el.ContactsHeading>Let's get in touch:</el.ContactsHeading>
					<el.IconsContainer>
						<el.ContactItem>
							{' '}
							<Link href={linkedIn}>
								<el.ContactIcon as={FaLinkedin} />
							</Link>
						</el.ContactItem>
						<el.ContactItem>
							{' '}
							<Link href={gitHub}>
								<el.ContactIcon as={FaGithub} />
							</Link>
						</el.ContactItem>
					</el.IconsContainer>
				</el.ContactsContainer>
			</el.Bottom>
		</el.Container>
	);
};
