import { styled, Text } from "@chakra-ui/react";

const HeadingOne = styled(Text, { baseStyle: {
    color: "gray.800",
    fontSize: {md: "6xl", sm: "5xl", base: "5xl"},
    fontWeight: "600",
    lineHeight: "1.2",
} });

const Paragraph = styled(Text, {baseStyle: {
    color: "gray.500",
    fontSize: {md: "2xl", sm: "xl", base: "xl"},
    fontWeight: "400"
}})

export const TypographyElements = {HeadingOne, Paragraph};
