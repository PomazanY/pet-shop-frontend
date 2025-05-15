import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cart-slice";
import styles from "./ProductItemCard.module.css";
import ButtonCard from "../../../shared/components/ButtonCard/ButtonCard";

const ProductItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discount = product.discont_price
    ? Math.round((1 - product.discont_price / product.price) * 100)
    : null;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, count: 1 }));
    navigate("/cart");
  };

  return (
    <div className={styles.productCard} >
      <div className={styles.imageWrapper}>
        {discount && (
          <span className={styles.discountBadge}>-{discount}%</span>
        )}
        <img
          src={`http://localhost:3333${product.image}`}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.buttonWrapper}>
          <div onClick={handleAddToCart}>
            <ButtonCard title="Add to cart" />
          </div>
        </div>
      </div>

      <p className={styles.productTitle} onClick={() => navigate(`/products/${product.id}`)}
        style={{ cursor: "pointer" }}>{product.title}</p>

      <p className={styles.productPrice}>
        {product.discont_price ? (
          <>
            <span className={styles.productDiscount}>${product.discont_price}</span>
            <span className={styles.productOld}>${product.price}</span>
          </>
        ) : (
          <span className={styles.productDiscount}>${product.price}</span>
        )}
      </p>
    </div>
  );
};

export default ProductItemCard;
