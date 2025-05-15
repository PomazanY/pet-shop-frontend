
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";

import Categories from "../../modules/Categories/Categories";
import CategoryDetailPage from "../CategoryDetailPage/CategoryDetailPage";



const CategoriesPage = () => {
    const breadcrumbItems = [
        { label: "Main page", path: "/" },
        { label: "Categories" }
    ]

    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />
            <CategoryDetailPage showBreadcrumbs={false} showFilters={false}/>
            <Categories />
        </>
    )
}

export default CategoriesPage;