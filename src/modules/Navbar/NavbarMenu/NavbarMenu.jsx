import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

import navbarMenuItems from "./navbarMenuItems";

import { navbarMenuStyle, navbarMenuLinkStyle } from "./styles";

const NavbarMenu = () => {
  const { colors } = useTheme();

  const elements = navbarMenuItems.map(({ href, text }) => (
    <li key={text}>
      <NavLink to={href} css={navbarMenuLinkStyle(colors.lightDark)}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul css={navbarMenuStyle}>{elements}</ul>;
};

export default NavbarMenu;
