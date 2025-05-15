import { NavLink } from "react-router-dom";
import { CloseIcon } from "../../../shared/icons";
import headerMenuItems from "./headerMenuItems";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = ({ isOpen, onClose }) => {
    const elements = headerMenuItems.map(item => (
        <li key={item.text}>
            <NavLink to={item.to} className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
            } onClick={onClose}>{item.text}</NavLink>
        </li>
    ));

    return <>
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <CloseIcon className={styles.closeIcon} />
        </button>
        <ul className={styles.menuList}>
            {elements}
        </ul>
    </div>
   </>
    
}

export default HeaderMenu;