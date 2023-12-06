import { Text, TextProps } from "@chakra-ui/react";
import { TypographyElements as el } from "./typography.elements";

interface ITypographyProps extends TextProps {
  type: "h1" | "p";
}
export const Typography = ({ type, children, ...rest }: ITypographyProps) => {
  switch (type) {
    case "h1":
      return (
        <el.HeadingOne as="h1" {...rest}>
          {children}
        </el.HeadingOne>
      );

    default:
      return (
        <el.Paragraph as="p" {...rest}>
          {children}
        </el.Paragraph>
      );
  }
};
