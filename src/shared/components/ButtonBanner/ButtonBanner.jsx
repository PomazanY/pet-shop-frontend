
import styles from "./ButtonBanner.module.css"


const ButtonBanner = ({ title, type = "button", children, ...props }) => {
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

export default ButtonBanner;