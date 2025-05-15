
import { WhatsAppIcon, InstagramIcon } from "../../../shared/icons";

import styles from "./FooterData.module.css";

const FooterData = ({ type, label, value }) => {
  return (
    <div className={styles.box}>
      <p className={styles.label}>{label}</p>
      {type === "socials" ? (
        <div className={styles.icons}>
          <InstagramIcon />
          <WhatsAppIcon />
        </div>
      ) : (
        <p className={styles.value}>{value}</p>
      )}
    </div>
  );
};

export default FooterData;

