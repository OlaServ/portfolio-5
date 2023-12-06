import { TextProps } from "@chakra-ui/react";
import { NavLinkElements as el } from "./nav-link.elements";
import { usePathname } from "next/navigation";

interface INavLinkProps extends TextProps {
  slug: string;
  text: string;
}
export const NavLink = ({ slug, text, ...rest }: INavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === slug;
  return (
    <el.NextLink href={slug} bg={isActive ? "teal.500" : "white"} {...rest}>
      <el.LinkText color={isActive ? "white" : "gray.900"}>{text}</el.LinkText>
    </el.NextLink>
  );
};
