import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart/cart-slice";

import { MinusIcon, PlusIcon } from '../../shared/icons';

import ButtonCard from "../../shared/components/ButtonCard/ButtonCard"

import styles from './SimpleProductCard.module.css';

const SimpleProductCard = ({ price, oldPrice, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : null;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, count: quantity }));
    navigate("/cart");
  };

  return (

    <div className={styles.wrapper}>
      <div className={styles.imageBlock}>
        <img
          src={`${import.meta.env.VITE_API_URL}${product.image}`}
          alt={product.title}
          className={styles.image}
          onClick={() => setShowImageModal(true)}
          style={{ cursor: "zoom-in" }}
        />
      </div>

      <div className={styles.infoBlock}>
        <h1 className={styles.title}>{product.title}</h1>

        <div className={styles.actions}>

          <div className={styles.priceWrapper}>
            {discount && (
              <span className={styles.discountBadge}>{discount}%</span>
            )}

            <div className={styles.priceBlock}>
              <span className={styles.currentPrice}>${price}</span>
              {oldPrice && (
                <span className={styles.oldPrice}>${oldPrice}</span>
              )}
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.quantity}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><MinusIcon /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}><PlusIcon /></button>
            </div>
            <div>
              <ButtonCard title="Add to cart" onClick={handleAddToCart} />
            </div>
          </div>
        </div>

        <div className={styles.descriptionBlock}>
          <h3>Description</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
      </div>
       {showImageModal && (
        <div className={styles.modalOverlay} onClick={() => setShowImageModal(false)}>
          <img
            src={`http://localhost:3333${product.image}`}
            alt="Zoomed"
            className={styles.modalImage}
          />
        </div>
      )}
    </div>

  );
};

export default SimpleProductCard;
