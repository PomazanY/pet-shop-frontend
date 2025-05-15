import styles from "./TextField.module.css";

import { useId } from "react";

const TextField = ({ register, error, name, rules = {}, className = "", ...props }) => {
  const id = useId();
  return (
    <div >
      <input {...register(name, rules)} {...props} id={id} className={`${styles.input} ${className}`}/>
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  )
}
export default TextField;