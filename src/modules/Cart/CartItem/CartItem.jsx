import { memo } from "react"
import { Link } from "react-router-dom";
import { MinusIcon, PlusIcon, CloseIcon } from '../../../shared/icons';
import styles from "./CartItem.module.css";

const CartItem = ({
    id,
    title,
    image,
    price,
    discont_price,
    count,
    onDeleteFromCart,
    onDecreaseCart,
    onIncreaseCart }) => {
    const finalPrice = discont_price || price;
   
    return (
        <>
            <div className={styles.cartItem}>
                <img src={`http://localhost:3333${image}`} alt={title} className={styles.image} />

                <div className={styles.content}>
                    <div className={styles.top}>
                        <Link to={`/products/${id}`} className={styles.link}>
                            {title}
                        </Link>
                        <button className={styles.deleteBtn} onClick={() => onDeleteFromCart(id)}><CloseIcon/></button>
                    </div>
        
                    <div className={styles.controls}>
                        <div className={styles.quantity}>
                            <button onClick={() => onDecreaseCart(id)}><MinusIcon/></button>
                            <span className={styles.count}>{count}</span>
                            <button onClick={() => onIncreaseCart(id)}><PlusIcon/></button>
                        </div>
                        <div className={styles.totalPrice}> ${(finalPrice * count)}
                        </div>
                        <div className={styles.priceWrapper}>
                            <div className={styles.priceBlock}>
                                <span className={styles.currentPrice}>${price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    );
};

export default memo(CartItem);
