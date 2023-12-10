"use client";
import {
  FlexProps,
  useBreakpoint,
  Collapse,

} from "@chakra-ui/react";
import { NavbarElements as el } from "./navbar.elements";
import {  useState } from "react";
import { NavLink } from "./nav-link/nav-link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { NavigationType } from "@/domain/navigation";

interface INavbarProps extends FlexProps {
  data: NavigationType
}

export const Navbar = ({data} : INavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();

  const toggleMobileMenu = () =>
    isMobileMenuOpen ? setIsMobileMenuOpen(false) : setIsMobileMenuOpen(true);

  // todo: add error handling


  if (breakpoint === "sm" || (breakpoint === "base")) {
    return (
      <el.MobileContainer>
        <el.NavButton
          onClick={toggleMobileMenu}
          background={isMobileMenuOpen ? "teal.300" : "teal.500"}
          _focus={{
            background: isMobileMenuOpen ? "teal.300" : "teal.500",
          }}
          _active={{
            background: isMobileMenuOpen ? "teal.300" : "teal.500",
          }}
          transform={isMobileMenuOpen ? "rotate3d(1, 1, 1, 360deg)": "none"}
          
        >
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
