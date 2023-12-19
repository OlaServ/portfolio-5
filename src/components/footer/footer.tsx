'use client';
import { basePath } from '../../../sanity.config';
import { FooterElements as el } from './footer.elements';
import { FooterLink } from './footer-link/footer-link';
import { FlexProps } from '@chakra-ui/react';
import { NavigationType } from '@/domain/navigation';
import { MdOutlineAlternateEmail } from 'react-icons/md';

interface IFooterProps extends FlexProps {
	navData: NavigationType;
}

export const Footer = ({ navData, ...rest }: IFooterProps) => {
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
							<el.EmailIcon />{' '}
							<el.ContactSpan>aleksandra.serwotka@gmail.com</el.ContactSpan>
						</el.ContactItem>
					</el.StyledGridItem>
				</el.InnerGrid>
			</el.InnerContainer>
		</el.Container>
	);
};
