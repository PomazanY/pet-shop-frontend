import styles from "./PriceRange.module.css"

const PriceRange = ({ priceFrom, priceTo, handleChange }) => {
  const validateValue = (value) => {
    const num = value;
    return isNaN(num) || num < 0 ? "" : num;
  };
  return (
    <div className={styles.wrapper}>

      <h3 className={styles.price}>Price</h3>

      <input
        className={styles.input}
        placeholder="from"
        min="0"
        type="number"
        value={priceFrom === "" ? undefined : priceFrom}
        onChange={(e) => handleChange("price_from", validateValue(e.target.value))}
      />
      <input
        className={styles.input}
        placeholder="to"
        min="0"
        type="number"
        value={priceTo === "" ? undefined : priceTo}
        onChange={(e) => handleChange("price_to", validateValue(e.target.value))}
      />

    </div>
  );
};
export default PriceRange;
