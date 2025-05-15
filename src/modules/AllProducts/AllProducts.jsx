import PageLayout from "../layouts/PageLayout/PageLayout";
import Container from "../layouts/Container/Container"
import ProductsCard from "./ProductsCard/ProductsCard";
import FilterControls from "../../shared/components/FilterControls/FilterControls";



const AllProducts = ({ products = [], loading, error,popular = false }) => {

   
  const visibleItems = popular ? products.slice(0, 4) : products;

  return (
    <Container>
      <PageLayout title="All products">
        <FilterControls />
        <ProductsCard products={visibleItems} loading={loading} error={error} />
      </PageLayout>
    </Container>

  );
};

export default AllProducts;