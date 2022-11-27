import React from "react";

const AdvertiseCard = ({ result }) => {
  console.log(result);
  const {
    productName,
    condition,
    location,
    mobileNumber,
    orginalPrice,
    picture,
    postTime,
    purchesYear,
    resalePrice,
    useYear,
  } = result;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
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
          <p>
            postTime: <small className="font-bold">{postTime}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
