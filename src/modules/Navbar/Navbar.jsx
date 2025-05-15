/** @jsxImportSource @emotion/react */

import Container from "../layouts/Container/Container";

import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

import { navbarStyle, navbarContentStyle } from "./styles";

const Navbar = () => {
  return (
    <nav css={navbarStyle}>
      <Container>
        <div css={navbarContentStyle}>
          <NavbarLogo />
          <NavbarMenu />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
