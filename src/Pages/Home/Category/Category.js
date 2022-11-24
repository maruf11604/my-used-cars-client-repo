import React, { useEffect, useState } from "react";
import CategoriesItem from "./CategoriesItem";

const Category = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {products.map((product) => (
        <CategoriesItem key={product._id} product={product}></CategoriesItem>
      ))}
    </div>
  );
};

export default Category;
