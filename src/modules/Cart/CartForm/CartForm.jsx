import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import TextField from "../../../shared/components/TextField/TextField";
import ButtonBanner from "../../../shared/components/ButtonBanner/ButtonBanner"
import { fields } from "./fields";

import styles from "./CartForm.module.css"

const CartForm = ({ totalPrice, totalCount }) => {
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = values => {
        console.log(values);
        reset();
        setShowModal((prevState) => !prevState);
    }
    return (
        <div className={styles.container}>
            <p className={styles.title}>Order details</p>
            <p className={styles.items}>{totalCount} items</p>
            <div className={styles.totalContainer}>
                <p className={styles.items}>Total</p>
                <p className={styles.totalPrice}>${totalPrice}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.textField}>
                <TextField register={register} error={errors.username} {...fields.username} className={styles.blackInput} />
                <TextField register={register} error={errors.phone} {...fields.phone} className={styles.blackInput} />
                <TextField register={register} error={errors.email} {...fields.email} className={styles.blackInput} />
                <ButtonBanner type="submit" className={styles.btn}>Order</ButtonBanner>
            </form>
            {showModal && (
                <Modal close={() => setShowModal(false)}>
                    <h2 className={styles.modalTitle}>Congratulations!</h2>
                    <p className={styles.modalText}>
                        Your order has been successfully placed on the website.
                    </p>
                    <p className={styles.modalText}>
                        A manager will contact you shortly to confirm your order.
                    </p>
                </Modal>
            )}
        </div>

    )
}
export default CartForm;