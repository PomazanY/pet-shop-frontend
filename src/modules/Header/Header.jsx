import { useState } from "react";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderAuth from "./HeaderAuth/HeaderAuth";

import Container from "../layouts/Container/Container";
import styles from "./Header.module.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <HeaderLogo />

                    <button
                        className={styles.burger}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>

                    <HeaderMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                    <div className={styles.auth}>
                        <HeaderAuth />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;