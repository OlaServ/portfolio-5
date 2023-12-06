import { styled, Text } from "@chakra-ui/react";

const HeadingOne = styled(Text, { baseStyle: {
    color: "gray.800",
    fontSize: "6xl",
    fontWeight: "600",
    lineHeight: "1.2",
} });

const Paragraph = styled(Text, {baseStyle: {
    color: "gray.500",
    fontSize: "2xl",
    fontWeight: "400"
}})

export const TypographyElements = {HeadingOne, Paragraph};
