import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const CategoryCardInfo = ({ prod, setCarView }) => {
  const { user, setAdvertise } = useContext(AuthContext);
  const {
    postTime,
    condition,
    location,
    mobileNumber,
    orginalPrice,
    purchesYear,
    resalePrice,
    useYear,
  } = prod;
  console.log(prod);
  // const handleAdvertise = (prod) => {
  //   // console.log(prod);
  //   setAdvertise(prod);
  // };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <p className="font-bold m-2">Time: {postTime}</p>
      <figure>
        <img src={prod.picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:{prod.productName}</h2>
        <p>
          Condition: <small className="font-bold">{condition}</small>
        </p>
        <p>
          Location: <small className="font-bold">{location}</small>
        </p>
        <p>
          Mobile: <small className="font-bold">{mobileNumber}</small>
        </p>
        <p>
          Original-price: <small className="font-bold">${orginalPrice}</small>
        </p>
        <p>
          PurchesYear: <small className="font-bold">{purchesYear}</small>
        </p>
        <p>
          Resale-price: <small className="font-bold">${resalePrice}</small>
        </p>
        <p>
          Use: <small className="font-bold">{useYear}</small> years
        </p>
        <div className="card-actions justify-end">
          {user?.uid ? (
            <label
              htmlFor="my-modal"
              className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0"
              onClick={() => setCarView(prod)}
            >
              Buy Now
            </label>
          ) : (
            <Link
              className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0"
              to="/login"
            >
              Buy Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCardInfo;
