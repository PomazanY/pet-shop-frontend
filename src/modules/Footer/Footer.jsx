import PageLayout from "../layouts/PageLayout/PageLayout";
import Container from "../layouts/Container/Container";
import FooterData from "./FooterData/FooterData";
import FooterMap from "./FooterMap/FooterMap";
import footerContactsItems from "./footerContactsItems";

import styles from "./Footer.module.css";

const Footer = () => {
  const elements = footerContactsItems.map((item) => (
    <FooterData key={item.type} {...item} />
  ));

  return (
    <footer>
      <Container>
        <PageLayout title="Contact">
          <div className={styles.container}>{elements}</div>
          <FooterMap/>
        </PageLayout>
      </Container>


    </footer>
  );
};

export default Footer;

