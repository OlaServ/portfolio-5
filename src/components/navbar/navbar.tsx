'use client';
import { FlexProps } from '@chakra-ui/react';
import { NavbarElements as el } from './navbar.elements';
import { useEffect, useState } from 'react';
import { NavLink } from './nav-link/nav-link';
import { AnimatePresence } from 'framer-motion';
import { NavigationType } from '@/domain/navigation';
import useScroll from '@/hooks/useScroll';

interface INavbarProps extends FlexProps {
	data: NavigationType;
}

export const Navbar = ({ data, ...rest }: INavbarProps) => {
	const scroll = useScroll();
	const [scrollY, setScrollY] = useState(scroll.y);
	const [navbarPosition, setNavbarPosition] = useState('0px');

	useEffect(() => {
		if (scroll.y >= scrollY) {
			setNavbarPosition('0px');
		} else {
			setNavbarPosition('20px');
		}
		setScrollY(scroll.y);
	}, [scroll]);

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleIsMenuOpen = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	const getLineAnimation = (line: 'top' | 'bottom') => {
		const translateY = line === 'top' ? '4.5px' : '-4.5px';
		const rotate = line === 'top' ? '45deg' : '-45deg';

		return {
			initial: { transform: 'translateY(0px) rotate(0deg)' },
			translate: {
				transition: { duration: 0.5, ease: 'anticipate' },
				transform: [`translateY(${translateY})`, 'translateY(0px)'],
			},
			translateWithRotation: {
				transition: { duration: 0.5, delay: 0.3, ease: 'backOut' },
				transform: [
					`translateY(${translateY})`,
					`translateY(${translateY}) rotate(${rotate})`,
				],
			},
		};
	};

	return (
		<el.Container top={navbarPosition} {...rest}>
			<AnimatePresence>
				<el.Logo key="nav-logo" />
				<el.InnerContainer key="nav-inner-container">
					{' '}
					{isMenuOpen && (
						<el.LinksContainer
							key="links-container"
							initial={{ opacity: 0, filter: 'blur(5px)' }}
							animate={{ opacity: 1, filter: 'none' }}
							exit={{ opacity: 0, filter: 'blur(5px)' }}
							animationDelay={0.3}
							animationDuration={0.3}
						>
							{data[0].mainNav.items.reverse().map((item) => {
								return (
									<NavLink
										text={item.text}
										slug={item.navigationItemUrl.internalLink.slug.current}
										key={`${item.navigationItemUrl.internalLink.slug.current}-mobile`}
									/>
								);
							})}
						</el.LinksContainer>
					)}
					<el.MenuButton onClick={toggleIsMenuOpen} key="nav-menu-button">
						<el.Line
							variants={getLineAnimation('top')}
							initial="initial"
							animate={isMenuOpen ? 'translateWithRotation' : 'translate'}
							animationDuration={0.3}
							mb="8px"
						/>
						<el.Line
							variants={getLineAnimation('bottom')}
							initial="initial"
							animate={isMenuOpen ? 'translateWithRotation' : 'translate'}
							animationDuration={0.3}
						/>
					</el.MenuButton>
				</el.InnerContainer>
			</AnimatePresence>
		</el.Container>
	);
};
