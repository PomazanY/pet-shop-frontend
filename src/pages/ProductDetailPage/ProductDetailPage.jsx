import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../shared/api/products-api";
import SimpleProductCard from "../../modules/SimpleProductCard/SimpleProductCard";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs"
import styles from "./ProductDetailPage.module.css";

const ProductDetailPage = ({ showBreadcrumbs = true }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        const product = productData[0];
        setProduct(product);

        if (product.categoryId) {
          const res = await fetch(`http://localhost:3333/categories/${product.categoryId}`);
          const categoryData = await res.json();
          setCategory(categoryData.category || categoryData);
        }
      } catch (error) {
        console.error("Ошибка при загрузке товара:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className={styles.loading}>Loading...</p>;

  const breadcrumbItems = [
    { label: "Main page", path: "/" },
    { label: "Categories", path: "/categories" },
    category && {
      label: category.title,
      path: `/categories/${category.id}`,
    },
    { label: product?.title }
  ].filter(Boolean);
    
  

return (
  <>
    {showBreadcrumbs && <Breadcrumbs items={breadcrumbItems} />}
    <SimpleProductCard
      product={product}
      price={product.discont_price || product.price}
      oldPrice={product.discont_price ? product.price : null}
      onAddToCart={(qty) => console.log(`Добавлено ${qty} шт.`)} //путь в корзину
    />
  </>

);
};

export default ProductDetailPage;
