import { useNavigate } from "react-router-dom";
import animals404Image from "../../assets/image/animals404.png"
import { NumberFourIcon } from "../../shared/icons";
import ButtonCard from "../../shared/components/ButtonCard/ButtonCard"
import styles from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <NumberFourIcon />
                <img src={animals404Image} alt="animals" />
                <NumberFourIcon />
            </div>
            <div>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.text}>We’re sorry, the page you requested could not be found. <br /> Please go back to the homepage.</p>
            </div>
             <div onClick={() => navigate("/")}>
                        <ButtonCard title="Go Home" />
                    </div>
        </main>
    )
}

export default NotFoundPage;