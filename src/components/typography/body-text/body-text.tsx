import { BodyTextElements as el } from "./body-text.elements";
import { TextProps } from "@chakra-ui/react";

interface IBodyTextProps extends TextProps {
  type: "span" | "p";
}
export const BodyText = ({ type, children, ...rest }: IBodyTextProps) => {
  switch (type) {
    case "p":
      return <el.Paragraph {...rest}>{children}</el.Paragraph>;
    case "span":
      return <el.Span {...rest}>{children}</el.Span>;
  }
};
