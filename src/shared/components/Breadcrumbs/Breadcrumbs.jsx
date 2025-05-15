import Container from "../../../modules/layouts/Container/Container";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ items }) => {
  return (
    <Container>
      <nav className={styles.breadcrumbs}>
        {items.map((item, index) => (
          <button key={index} className={styles.crumb}>
            {item.path ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span className={styles.active}>{item.label}</span>
            )}
            
          </button>
        ))}
      </nav>
    </Container>

  );
};

export default Breadcrumbs;
