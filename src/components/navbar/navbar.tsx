"use client";
import {
  FlexProps,
  useBreakpoint,
  ScaleFade,
  Collapse,
  Spinner,
} from "@chakra-ui/react";
import { NavbarElements as el } from "./navbar.elements";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLink } from "./nav-link/nav-link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { useNavigationData } from "@/hooks/use-navigation-data";

interface INavbarProps extends FlexProps {}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();

  const toggleMobileMenu = () =>
    isMobileMenuOpen ? setIsMobileMenuOpen(false) : setIsMobileMenuOpen(true);

  const { status, data } = useNavigationData();

  if (!data) {
    return <Spinner size="lg" justifySelf="center" />;
  }

  if (breakpoint === "sm" || breakpoint === "base" && data) {
    return (
      <el.MobileContainer>
        <el.NavButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <RiCloseLine /> : <RxHamburgerMenu />}
        </el.NavButton>
        <Collapse
          in={isMobileMenuOpen}
          transition={{ exit: { delay: 0.2 }, enter: { duration: 0.2 } }}
          startingHeight={0}
        >
          <el.InnerMobileNav>
          {data[0].mainNav.items.map((item) => {
        return (
          <NavLink
            text={item.text}
            slug={item.navigationItemUrl.internalLink.slug.current}
            key={`${item.navigationItemUrl.internalLink.slug.current}-mobile`}
          />
        );
      })}
          </el.InnerMobileNav>
        </Collapse>
      </el.MobileContainer>
    );
  }

  return (
    <el.Container>
      {data[0].mainNav.items.map((item) => {
        return (
          <NavLink
            text={item.text}
            slug={item.navigationItemUrl.internalLink.slug.current}
            key={item.navigationItemUrl.internalLink.slug.current}
          />
        );
      })}
    </el.Container>
  );
};
