import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import useFetch from "../../shared/hooks/useFetch";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import SaleSection from "../../modules/SaleSection/SaleSection";
import { filterProductsUtil } from "../../shared/utils/filterProducts";
import { getSaleProducts } from "../../shared/api/sale-api";

const AllSalesPage = ({ showBreadcrumbs = true, showFilters = true }) => {
  
  const [searchParams] = useSearchParams();

  const {
    data: saleProducts = [],
    loading,
    error,
  } = useFetch({
    request: getSaleProducts,
    initialData: [],
  });

  const filteredProducts = useMemo(() => {
    return filterProductsUtil(saleProducts, searchParams);
  }, [saleProducts, searchParams]);

  const breadcrumbItems = [
    { label: "Main page", path: "/" },
    { label: "All sales" },
  ];

  return (
    <>
      {showBreadcrumbs && <Breadcrumbs items={breadcrumbItems} />}
      <SaleSection products={filteredProducts} loading={loading} error={error} showFilters={showFilters}/>
    </>
  );
};

export default AllSalesPage;
