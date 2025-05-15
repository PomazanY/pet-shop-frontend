import styles from "./PageLayout.module.css";
import { Link } from "react-router-dom";

const PageLayout = ({ title, buttonLabel, buttonLink, children }) => {
    return (
        <main className={styles.main}>
            <div className={styles.row}>
                <h2 className={styles.title}>{title}</h2>
                {buttonLabel && buttonLink && (
                    <>
                        <div className={styles.line}></div>
                        <Link to={buttonLink} className={styles.button}>
                            {buttonLabel}
                        </Link>
                    </>
                )}
            </div>
            {children}

        </main>
    );
};

export default PageLayout;


