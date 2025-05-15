import styles from "./Filter.module.css"
import PriceRange from "../../PriceRange/PriceRange";
import Checkbox from "../../Checkbox/Checkbox";
import SortSelect from "../../SortSelect/SortSelect";

const Filter = ({ searchParams, handleChange }) => {
    return (
        <div className={styles.filterContainer}>
            <PriceRange
                priceFrom={searchParams.get("price_from") || ""}
                priceTo={searchParams.get("price_to") || ""}
                handleChange={handleChange} />
            <Checkbox searchParams={searchParams} handleChange={handleChange} title="Discounted only:" />
            <SortSelect searchParams={searchParams} handleChange={handleChange} />
        </div>
    )
}
export default Filter;