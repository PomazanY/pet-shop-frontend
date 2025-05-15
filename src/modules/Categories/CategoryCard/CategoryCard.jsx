import styles from "./CategoryCard.module.css";

import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  return (
    <Link to={`/categories/${item.id}`} className={styles.card}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_API_URL}${item.image})`
        }}
      />
      <p className={styles.title}>{item.title}</p>
    </Link>
  );
};

export default CategoryCard;
