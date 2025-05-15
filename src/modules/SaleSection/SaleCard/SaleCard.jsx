import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cart-slice";
import styles from "./SaleCard.module.css";
import ButtonCard from "../../../shared/components/ButtonCard/ButtonCard";

const SaleCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discount = item.discont_price
    ? Math.round((1 - item.discont_price / item.price) * 100)
    : null;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, count: 1 }));
    navigate("/cart");
  };

  return (

    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        {discount && (
          <span className={styles.discountBadge}>-{discount}%</span>
        )}
        <img
          src={`${import.meta.env.VITE_API_URL}${item.image}`}
          alt={item.title}
          className={styles.productImage}
        />
        <div className={styles.buttonWrapper} >
          <div onClick={handleAddToCart}>
            <ButtonCard title="Add to cart" />
          </div>
        </div>
      </div>

      <p className={styles.productTitle} onClick={() => navigate(`/products/${item.id}`)}
        style={{ cursor: "pointer" }}>{item.title}</p>

      <p className={styles.productPrice}>
        {item.discont_price ? (
          <>
            <span className={styles.productDiscount}>${item.discont_price}</span>
            <span className={styles.productOld}>${item.price}</span>
          </>
        ) : (
          <span className={styles.productDiscount}>${item.price}</span>
        )}
      </p>
    </div>
  );
};

export default SaleCard;
