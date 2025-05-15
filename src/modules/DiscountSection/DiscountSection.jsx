import Container from "../layouts/Container/Container";
import ButtonCard from "../../shared/components/ButtonCard/ButtonCard";

import styles from "./DiscountSection.module.css"
const DiscountSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.overlay}>
                    <h1 className={styles.title}>Amazing Discounts <br /> on Pets Products!</h1>
                </div>

                <ButtonCard>Check out</ButtonCard>
            </Container>
        </section>
    )
}
export default DiscountSection;