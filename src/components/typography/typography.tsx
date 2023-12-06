import { Text, TextProps } from "@chakra-ui/react";
import { TypographyElements as el } from "./typography.elements";

interface ITypographyProps extends TextProps {
  type: "h1" | "p";
}
export const Typography = ({ type, children}: ITypographyProps) => {
  switch (type) {
    case "h1":
      return <el.HeadingOne as="h1">
        {children}
      </el.HeadingOne>;
     
      default: return <el.Paragraph as="p">{children}</el.Paragraph>
  }
  
};
