import styles from "./ProductsCard.module.css";
import ProductItemCard from "../ProductItemCard/ProductItemCard";


const ProductsCard = ({ products, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      {products.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#666" }}>
          No products match your filter.
        </p>
      ) : (
        <div className={styles.productList}>
          {products.map((product) => (
            <ProductItemCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsCard;
