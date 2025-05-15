import { css } from "@emotion/react";

export const navbarMenuStyle = css`
    display: flex;
    gap: 64px;
`;

export const navbarMenuLinkStyle = color => css`
text-decoration: none;
font-size: 15px;
font-weight: 600;
color: ${color};

&.active {
    color: #fff;
}

:hover {
    color: #fff;
}
`;