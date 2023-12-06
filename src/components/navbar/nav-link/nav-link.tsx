import { TextProps } from "@chakra-ui/react";
import { NavLinkElements as el } from "./nav-link.elements";
import { usePathname } from "next/navigation";

interface INavLinkProps extends TextProps {
  slug: string;
  text: string;
}
export const NavLink = ({ slug, text, ...rest }: INavLinkProps) => {
  const pathname = usePathname();

  const isRouteActive = slug === "/" ? pathname === slug : pathname.includes(slug);

  return (
    <el.NextLink href={slug} bg={isRouteActive ? "teal.500" : "white"} {...rest}>
      <el.LinkText color={isRouteActive ? "white" : "gray.900"}>{text}</el.LinkText>
    </el.NextLink>
  );
};