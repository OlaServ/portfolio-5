import { styled, Text } from "@chakra-ui/react";
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
    p: "5px 10px",
    fontsize: "14px",
    lineHeight: "20px",
    my: {sm: "12px", base: "12px"},
    textTransform: "uppercase",
    fontSize: "sm",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "white",
    _hover: {
      color: "primary.green",
    },
  },
});

export const NavLinkElements = { NextLink, LinkText };
