import Container from "../layouts/Container/Container";
import GetDiscountForm from "./GetDiscountForm/GetDiscountForm";

import dogsImage from '../../assets/image/dogs.png';

import styles from "./GetDiscount.module.css"

const GetDiscount = () => {


    return (
        <section className={styles.section}>
            <Container>
                <h1 className={styles.title}>5% off on the first order</h1>
                <img src={dogsImage} alt="animals" className={styles.image} />
                <div className={styles.formWrapper}>
                    <GetDiscountForm />
                </div>
            </Container>
        </section>

    )
}

export default GetDiscount;