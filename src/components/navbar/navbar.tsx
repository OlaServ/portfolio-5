"use client";
import { FlexProps, useBreakpoint, Collapse } from "@chakra-ui/react";
import { NavbarElements as el } from "./navbar.elements";
import { useState } from "react";
import { NavLink } from "./nav-link/nav-link";
import { AnimatePresence } from "framer-motion";
import { NavigationType } from "@/domain/navigation";

interface INavbarProps extends FlexProps {
  data: NavigationType;
}

export const Navbar = ({ data }: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMenuOpen = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  const getLineAnimation = (line: "top" | "bottom") => {
    const translateY = line === "top" ? "4.5px" : "-4.5px";
    const rotate = line === "top" ? "45deg" : "-45deg";

    return {
      initial: { transform: "translateY(0px) rotate(0deg)" },
      translate: {
        transition: { duration: 0.5, ease: "anticipate" },
        transform: [`translateY(${translateY})`, "translateY(0px)"],
      },
      translateWithRotation: {
        transition: { duration: 0.5, delay: 0.3, ease: "backOut" },
        transform: [
          `translateY(${translateY})`,
          `translateY(${translateY}) rotate(${rotate})`,
        ],
      },
    };
  };

  return (
    <el.Container>
      <AnimatePresence>
        {isMenuOpen && (
          <el.LinksContainer
            key="links-container"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "none" }}
            exit={{ opacity: 0, filter: "blur(5px)" }}
            animationDelay={0.3}
            animationDuration={0.3}
          >
            {data[0].mainNav.items.map((item) => {
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
      </AnimatePresence>
      <el.MenuButton onClick={toggleIsMenuOpen}>
        <el.Line
          variants={getLineAnimation("top")}
          initial="initial"
          animate={isMenuOpen ? "translateWithRotation" : "translate"}
          animationDuration={0.3}
          mb="8px"
        />
        <el.Line
          variants={getLineAnimation("bottom")}
          initial="initial"
          animate={isMenuOpen ? "translateWithRotation" : "translate"}
          animationDuration={0.3}
        />
      </el.MenuButton>
    </el.Container>
  );
};

/* export const Navbar = ({data} : INavbarProps) => {
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
 */
