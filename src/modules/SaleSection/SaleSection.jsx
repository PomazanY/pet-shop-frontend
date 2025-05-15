import PageLayout from "../layouts/PageLayout/PageLayout";
import Container from "../layouts/Container/Container";
import SaleCard from "./SaleCard/SaleCard";
import FilterControls from "../../shared/components/FilterControls/FilterControls";

import styles from "./SaleSection.module.css";

const SaleSection = ({ products = [], loading, error, showFilters = false, popular = false }) => {
  const visibleItems = popular ? products.slice(0, 4) : products;

  return (
    <Container>
      {showFilters && <FilterControls />}
      <PageLayout title="Sale" buttonLabel="All sales" buttonLink="/sales">
        <div className={styles.container}>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : visibleItems.length === 0 ? (
            <p style={{ fontSize: "18px", color: "#666" }}>
              No discounted products found.
            </p>
          ) : (
            visibleItems.map((item) => <SaleCard key={item.id} item={item} />)
          )}
        </div>
      </PageLayout>
    </Container>
  );
};

export default SaleSection;
