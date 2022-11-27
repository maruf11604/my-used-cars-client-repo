import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem = ({ product }) => {
  console.log(product);
  const { name, picture, _id: id } = product;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body grid justify-center bg-slate-400 ">
          <h2 className="card-title">{name}</h2>
          <p></p>

          <div className="card-actions ">
            <Link
              to={`/productOptions/${id}`}
              className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesItem;
