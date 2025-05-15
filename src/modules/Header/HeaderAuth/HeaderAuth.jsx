import { NavLink } from "react-router-dom";
import { CartIcon } from "../../../shared/icons";
import { useSelector } from "react-redux";
import { selectTotalCartItems } from "../../../redux/cart/cart-selector";

import styles from "./HeaderAuth.module.css";

const HeaderAuth = () => {
    const totalCount = useSelector(selectTotalCartItems)
    return (
        <NavLink to="/cart" className={styles.link}>
            <div className={styles.cartWrapper}>
                <CartIcon className={styles.icon} />
                {totalCount > 0 && (
                    <span className={styles.badge}>{totalCount}</span>
                )}
            </div>
        </NavLink>
    )
}

export default HeaderAuth;