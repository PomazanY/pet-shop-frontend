import styles from "./SortSelect.module.css";

const SortSelect = ({ searchParams, handleChange }) => {
  const currentSort = searchParams.get("sort") || "default";

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.sort}>Sorted</h3>
      <select
        value={currentSort}
        onChange={(e) => handleChange("sort", e.target.value)}
        className={styles.select}
      >
        <option value="default">by default</option>
        <option value="new">newest</option>
        <option value="priceHighLow">price: high-low</option>
        <option value="priceLowHigh">price: low-high</option>
      </select>
    </div>
  );
};

export default SortSelect;
