import useFetch from "../../shared/hooks/useFetch";
import { getSaleProducts } from "../../shared/api/sale-api";

import DiscountSection from "../../modules/DiscountSection/DiscountSection";
import Categories from "../../modules/Categories/Categories";
import GetDiscount from "../../modules/GetDiscount/GetDiscount";
import SaleSection from "../../modules/SaleSection/SaleSection";



const HomePage = () => {
    const {
        data: saleProducts = [],
        loading,
        error,
    } = useFetch({
        request: getSaleProducts,
        initialData: [],
    });
    return (
        <>
            <DiscountSection />
            <Categories popular />
            <GetDiscount />
            <SaleSection products={saleProducts}
                loading={loading}
                error={error}
                popular />
        </>
    )
}

export default HomePage;