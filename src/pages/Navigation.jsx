import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import CategoryDetailPage from "./CategoryDetailPage/CategoryDetailPage";
import AllProductsPage from "./AllProductsPage/AllProductsPage";
import AllSalesPage from "./AllSalesPage/AllSalesPage";
import ProductDetailPage from "./ProductDetailPage/ProductDetailPage";
import CartPage from "./CartPage/CartPage";

import NotFoundPage from "./NotFoundPage/NotFoundPage";


const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryDetailPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/sales" element={<AllSalesPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />


        </Routes>
    )
}

export default Navigation;