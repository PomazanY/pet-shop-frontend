import styles from "./Checkbox.module.css";

const Checkbox = ({ searchParams, handleChange, title }) => {
  const isChecked = searchParams.get("discount") === "true";

  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{title}</span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) =>
          handleChange("discount", e.target.checked ? "true" : "")
        }
        className={styles.input}
      />
      <span className={styles.customBox}></span>
      
    </label>
  );
};

export default Checkbox;