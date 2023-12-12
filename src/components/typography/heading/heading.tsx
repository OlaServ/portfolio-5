import { HeadingProps } from "@chakra-ui/react";
import { HeadingElements as el } from "./heading.elements";

interface IHeadingProps extends HeadingProps {
  type: "h1";
}
export const Heading = ({ type, children, ...rest }: IHeadingProps) => {
  switch (type) {
    case "h1":
      return <el.HeadingOne {...rest}>{children}</el.HeadingOne>;
  }
};
