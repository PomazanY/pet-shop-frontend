/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import { linkStyle } from "./styles";

const NavbarLogo = ()=> {
    return <Link to="/" css={linkStyle}>Сникер - магазин</Link>
}

export default NavbarLogo;