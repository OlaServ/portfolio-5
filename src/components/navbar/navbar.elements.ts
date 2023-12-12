import { styled, Flex, Text, Button, Box } from "@chakra-ui/react";
import { AnimatedBox } from "../animated-box/animated-box";

const Container = styled(Flex, {
  baseStyle: {
    position: "fixed",
    transition: "all 0.8s ease-in-out",
    p: { md: "20px 80px", base: "16px" },
    top: "20px",
    left: "0",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: {
      lg: "center",
      md: "center",
      sm: "flex-end",
      base: "flex-end",
    },
    zIndex: "1000",
    flexDirection: {
      lg: "row",
      md: "row",
      sm: "column-reverse",
      base: "column-reverse",
    },
  },
});

const MenuButton = styled(Button, {
  baseStyle: {
    borderRadius: "full",
    boxSize: "70px",
    background: "rgba(50, 50, 53, 1)",
    opacity: "0.8",
    transition: "all 0.3s linear",
    py: "28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    _hover: {
      background: "rgba(94, 94, 100, 1)",
    },
  },
});

const Line = styled(AnimatedBox, {
  baseStyle: {
    background: "primary.white",
    opacity: "0.8",
    width: "22px",
    height: "1px",
    transformOrigin: "center",
  },
});

const LinksContainer = styled(AnimatedBox, {
  baseStyle: {
    display: "flex",
    background: "rgba(50, 50, 53, 0.8)",
    height: { lg: "70px", md: "70px", sm: "auto", base: "auto" },
    borderRadius: { lg: "100px", md: "100px", sm: "40px", base: "40px" },
    justifyContent: "center",
    alignItems: "center",
    mr: { lg: "20px", md: "20px", sm: "0", base: "0" },
    mt: { lg: "0", md: "0", sm: "20px", base: "20px" },
    p: { lg: "0 20px", md: "0 20px", sm: "20px", base: "20px" },
    flexDirection: {
      lg: "row",
      md: "row",
      sm: "column-reverse",
      base: "column-reverse",
    },
  },
});

export const NavbarElements = { Container, MenuButton, Line, LinksContainer };
