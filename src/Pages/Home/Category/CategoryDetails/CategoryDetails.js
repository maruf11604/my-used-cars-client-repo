import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import CategoryCardInfo from "./CategoryCardInfo";

const CategoryDetails = () => {
  const products = useLoaderData();
  const [carView, setCarView] = useState(null);
  const { product } = products;
  console.log(product);
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 m-4">
      {product.map((prod) => (
        <CategoryCardInfo
          prod={prod}
          setCarView={setCarView}
        ></CategoryCardInfo>
      ))}
      {carView && (
        <BookingModal carView={carView} setCarView={setCarView}></BookingModal>
      )}
    </div>
  );
};

export default CategoryDetails;
