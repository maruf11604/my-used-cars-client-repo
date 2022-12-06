import React from "react";

const AdvertiseCard = ({ addvartise }) => {
  console.log(addvartise);
  const {
    name,
    condition,
    location,
    price,
    picture,
    description,
    purchaseYear,
    email,
  } = addvartise;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            Condition: <small className="font-bold">{condition}</small>
          </p>
          <p>
            Location: <small className="font-bold">{location}</small>
          </p>
          <p>
            Price: <small className="font-bold">{price}</small>
          </p>
          <p>
            Description: <small className="font-bold">${description}</small>
          </p>
          <p>
            PurchesYear: <small className="font-bold">{purchaseYear}</small>
          </p>

          <p>
            Email: <small className="font-bold">{email}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
