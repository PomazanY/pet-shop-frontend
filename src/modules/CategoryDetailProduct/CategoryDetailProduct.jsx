import { useNavigate } from "react-router-dom";
import Container from "../layouts/Container/Container";
import ButtonCard from "../../shared/components/ButtonCard/ButtonCard";

import styles from "./CategoryDetailProduct.module.css";


const CategoryDetailProduct = ({ products, loading, error, category, showFilters = true }) => {
    const navigate = useNavigate();
    return (
        <Container>

            {loading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <>
                    <h1 className={styles.title}>{category?.title}</h1>

                    {(products.length === 0 && showFilters) ? (
                        <p style={{ fontSize: "18px", color: "#666", marginTop: "20px" }}>
                            No products match your filter. Try changing filter values.
                        </p>
                    ) : (
                        <div className={styles.productList}>
                            {products.map((product) => {
                                const discount = product.discont_price
                                    ? Math.round((1 - product.discont_price / product.price) * 100)
                                    : null;

                                return (
                                    <div key={product.id} onClick={() => navigate(`/products/${product.id}`)}
                                        style={{ cursor: "pointer" }} className={styles.productCard}>
                                        <div className={styles.imageWrapper}>
                                            {discount && (
                                                <span className={styles.discountBadge}>-{discount}%</span>
                                            )}
                                            <img
                                                src={`http://localhost:3333${product.image}`}
                                                alt={product.title}
                                                className={styles.productImage}
                                            />
                                            <div className={styles.buttonWrapper}>
                                                <ButtonCard title="Add to cart" />
                                            </div>
                                        </div>

                                        <p className={styles.productTitle}>{product.title}</p>

                                        <p className={styles.productPrice}>
                                            {product.discont_price ? (
                                                <>
                                                    <span className={styles.productDiscount}>
                                                        ${product.discont_price}
                                                    </span>
                                                    <span className={styles.productOld}>
                                                        ${product.price}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className={styles.productDiscount}>${product.price}</span>
                                            )}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </>
            )}
        </Container>

    )
}

export default CategoryDetailProduct;
