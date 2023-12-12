import { Flex, Image, Box, Card, styled } from "@chakra-ui/react";
import { Heading } from "../typography/heading/heading";
import { BodyText } from "../typography/body-text/body-text";

const Container = styled(Flex, {
  baseStyle: {
    minH: "110vh",
    w: "100%",
    pl: { md: "80px", sm: "40px", base: "16px" },
    pr: "20px",
    pt: "20px",

    alignItems: "flex-start",
    justifyContent: {
      md: "space-between",
      sm: "flex-start",
      base: "flex-start",
    },
    mt: "0",
    overflow: "hidden",
    flexDirection: {
      md: "row",
      sm: "column",
      base: "column",
    },
    background: "secondary.blackSoft",
  },
});

const LeftColumn = styled(Flex, {
  baseStyle: {
    width: { md: "50%", sm: "100%", base: "100%" },
    height: { md: "100%", sm: "auto", base: "auto" },
    justifyContent: "center",
    p: { md: "2vw", sm: "4vw", base: "4vw" },
    flexDirection: "column",
  },
});

const TextContainer = styled(Flex, {
  baseStyle: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    py: "160px",
  },
});

const HeadingOne = styled(Heading, {
  baseStyle: {
    color: "primary.green",
  },
});

const HeadingTwo = styled(Heading, {
  baseStyle: {
    color: "white",
    mb: "48px",
  },
});

const RightColumn = styled(Box, {
  baseStyle: {
    width: { md: "50%", sm: "100%", base: "100%" },
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const MainPhoto = styled(Card, {
  baseStyle: {
    width: "auto",
    height: "62vh",
    backgroundPosition: "50% 20%",
    backgroundSize: "cover",
    borderRadius: "14px",
    overflow: "hidden",
    mb: "20px",
  },
});

const SecondaryPhoto = styled(Image, {
  baseStyle: {
    height: "30vh",
    borderRadius: "14px",
    width: "50%",
    objectFit: "cover",
  },
});

const Body = styled(BodyText, {
  baseStyle: {
    color: "white",
  },
});

export const HeroElements = {
  Container,
  TextContainer,
  LeftColumn,
  MainPhoto,
  SecondaryPhoto,
  HeadingOne,
  HeadingTwo,
  Body,
  RightColumn,
};
