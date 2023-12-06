import { Flex, Image, Box, styled } from "@chakra-ui/react";

const Container = styled(Flex, {
  baseStyle: {
    alignItems: "center",
    justifyContent: {md: "space-between", sm: "flex-start", base: "flex-start"},
    margin: "1vw",
    mt: "0",
    w: {md: "95vw", sm: "95vw", base: "95vw"},
    border: "1px solid",
    borderColor: "gray.100",
    borderRadius: "lg",
    overflow: "hidden",
    height: { md: "88vh", sm: "90vh", base: "90h" },
       boxShadow: "lg",
    flexDirection: {
      md: "row",
      sm: "column",
      base: "column",
    },
    bgGradient: "linear(to-t, teal.50, white)",
  },
});

const TextContainer = styled(Flex, {
  baseStyle: {
    width: { md: "50%", sm: "100%", base: "100%" },
    height: { md: "100%", sm: "auto", base: "auto" },
    justifyContent: "center",
    p: { md: "2vw", sm: "4vw", base: "4vw" },
    flexDirection: "column",
  },
});

const Photo = styled(Image, {
  baseStyle: {
    width: { md: "50%", sm: "100%", base: "100%" },
    height: { md: "100%", sm: "auto", base: "auto" },
    objectFit: "cover",
    clipPath: {
      md: "polygon(0 0, 10% 100%, 100% 100%, 100% 0%, 100% 0)",
      sm: "none",
      base: "none",
    },
  },
});

export const HeroElements = { Container, TextContainer, Photo };
