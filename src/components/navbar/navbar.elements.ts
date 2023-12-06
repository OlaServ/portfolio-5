import { styled, Flex, Text, Button, Collapse } from "@chakra-ui/react";

const MobileContainer = styled(Flex, {
  baseStyle: {
    w: "100%",
    justifyContent: "flex-end",
    pos: "relative",
  },
});

const Container = styled(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    maxH: "10vh",
  },
});

const LinkText = styled(Text, {
  baseStyle: {
    p: "10px 20px",
    borderRadius: "sm",
    color: "gray.900",
    m: "1vw",
    textTransform: "uppercase",
    fontSize: "sm",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
});

const NavButton = styled(Button, {
  baseStyle: {
    m: "1vh",
    background: "teal.500",
    color: "white",
    _hover: {
      background: "teal.400",
    },
  },
});

const InnerMobileNav = styled(Flex, {
  baseStyle: {
    boxShadow: "lg",
    borderRadius: "md",
    background: "white",
    width: "60%",
    minWidth: "75vw",
    height: "auto",
    position: "absolute",
    top: "100%",
    right: "10%",
    flexDirection: "column",
  },
});

export const NavbarElements = {
  MobileContainer,
  Container,
  LinkText,
  NavButton,
  InnerMobileNav,
};
