
import styles from "./ButtonCard.module.css"


const ButtonCard = ({ title, type = "button", children, ...props }) => {
  return (
    <button
      type={type}
      title={title}
      className={styles.btn}
      {...props}
    >
      {title || children}
    </button>
  );
};

export default ButtonCard;