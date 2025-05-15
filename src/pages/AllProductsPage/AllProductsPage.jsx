import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchProducts } from "../../redux/products/products-thunks";
import { selectAllProducts } from "../../redux/products/products-selector";

import AllProducts from "../../modules/AllProducts/AllProducts";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import { filterProductsUtil } from "../../shared/utils/filterProducts";

const breadcrumbItems = [
  { label: "Main page", path: "/" },
  { label: "All products" },
];

const AllProductsPage = ({ showBreadcrumbs = true }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { items: allProducts, loading, error } = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return filterProductsUtil(allProducts, searchParams);
  }, [allProducts, searchParams]);

  return (
    <>
      {showBreadcrumbs && <Breadcrumbs items={breadcrumbItems} />}
      <AllProducts
        products={filteredProducts}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default AllProductsPage;
