export const filterProductsUtil = (products, searchParams) => {
  // if (!Array.isArray(products)) return [];

  let result = [...products];

  const priceFrom = parseFloat(searchParams.get("price_from"));
  const priceTo = parseFloat(searchParams.get("price_to"));
  const discount = searchParams.get("discount") === "true";
  const sort = searchParams.get("sort");

  if (!isNaN(priceFrom)) {
    result = result.filter((p) => p.price >= priceFrom);
  }

  if (!isNaN(priceTo)) {
    result = result.filter((p) => p.price <= priceTo);
  }

  if (discount) {
    result = result.filter((p) => p.discont_price); 
  }

  if (sort === "priceLowHigh") {
    result.sort((a, b) => (a.discont_price || a.price) - (b.discont_price || b.price));
  } else if (sort === "priceHighLow") {
    result.sort((a, b) => (b.discont_price || b.price) - (a.discont_price || a.price));
  } else if (sort === "new") {
    result.sort((a, b) => b.id - a.id);
  }

  return result;
};
