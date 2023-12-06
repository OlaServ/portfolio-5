import { chakra, styled, Text } from "@chakra-ui/react";
import Link from "next/link";

const NextLink = styled(Link, {
  baseStyle: {
    m: "1vw",
    borderRadius: "md",
    _hover: {
      textDecor: "none",
    },
  },
});

const LinkText = styled(Text, {
  baseStyle: {
    p: "10px 20px",
    borderRadius: "sm",
    textTransform: "uppercase",
    fontSize: "sm",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
});

export const NavLinkElements = { NextLink, LinkText };
