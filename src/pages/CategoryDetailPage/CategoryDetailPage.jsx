import { useParams, useSearchParams } from "react-router-dom";
import { useCallback, useMemo } from "react";
import useFetch from "../../shared/hooks/useFetch";

import CategoryDetailProduct from "../../modules/CategoryDetailProduct/CategoryDetailProduct";

import Container from "../../modules/layouts/Container/Container";
import { filterProductsUtil } from "../../shared/utils/filterProducts";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import FilterControls from "../../shared/components/FilterControls/FilterControls";


const CategoryDetailPage = ({ showBreadcrumbs = true, showFilters = true }) => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const request = useCallback(async () => {
        try {
            const res = await fetch(`http://localhost:3333/categories/${id}`);
            const data = await res.json();
            return { data };
        } catch (error) {
            return { error };
        }
    }, [id]);

    const {
        data: { category = {}, data: allProducts = [] } = {},
        loading,
        error,
    } = useFetch({
        request,
        initialData: { category: {}, data: [] },
    });

    const filteredProducts = useMemo(() => {
        return filterProductsUtil(allProducts, searchParams);
    }, [allProducts, searchParams]);

    const breadcrumbItems = [
        { label: "Main page", path: "/" },
        { label: "Categories", path: "/categories" },
        { label: category?.title || `Category #${id}` },
    ];
    return (
        <>
            {showBreadcrumbs && <Breadcrumbs items={breadcrumbItems} />}
            {showFilters && (
                <Container>
                    <FilterControls />
                </Container>
            )}
            <CategoryDetailProduct products={filteredProducts} loading={loading} error={error} category={category} showFilters={showFilters}/>

        </>
    );

};

export default CategoryDetailPage;
