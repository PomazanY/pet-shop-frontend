import { useSearchParams } from "react-router-dom";
import Filter from "./Filter/Filter";


const FilterControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (!value || value === "default" || value === false) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams, { replace: true });
  };

  return (
      <Filter searchParams={searchParams} handleChange={handleChange} />
  );
};

export default FilterControls;
