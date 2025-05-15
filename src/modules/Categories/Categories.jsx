import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import PageLayout from "../layouts/PageLayout/PageLayout";
import Container from "../layouts/Container/Container"
import CategoryCard from "./CategoryCard/CategoryCard";

import { fetchCategories } from "../../redux/categories/categories-thunks";
import { selectAllCategories } from "../../redux/categories/categories-selector";

import styles from "./Categories.module.css";


const Categories = ({ popular = false }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const visibleItems = popular ? items.slice(0, 4) : items;

  return (
    <Container>
      
      <PageLayout title="Categories" buttonLabel="All categories" buttonLink="/categories">

        <div className={styles.container}>
          {visibleItems.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

      </PageLayout>
    </Container>

  );
};

export default Categories;