import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "../../Modal/Modal";

import TextField from "../../../shared/components/TextField/TextField";
import ButtonBanner from "../../../shared/components/ButtonBanner/ButtonBanner"
import { fields } from "./fields";

import styles from "./GetDiscountForm.module.css"

const GetDiscountForm = () => {
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = values => {
        console.log(values);
        reset();
        setShowModal((prevState) => !prevState);
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.textField} >
      <TextField register={register} error={errors.username} {...fields.username} className={styles.whiteInput}/>
       <TextField register={register} error={errors.phone} {...fields.phone} className={styles.whiteInput}/>
        <TextField register={register} error={errors.email} {...fields.email}  className={styles.whiteInput}/>
        <ButtonBanner type="submit">Get a discount</ButtonBanner>
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
    </form>
    )

}
export default GetDiscountForm;

