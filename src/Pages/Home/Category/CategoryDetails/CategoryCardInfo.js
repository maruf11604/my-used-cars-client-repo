import React from "react";

const CategoryCardInfo = ({ prod, setCarView }) => {
  console.log(prod);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={prod.picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{prod.productName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <label
            htmlFor="my-modal"
            className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0"
            onClick={() => setCarView(prod)}
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardInfo;
