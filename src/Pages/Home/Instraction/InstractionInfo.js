import React from "react";

const InstractionInfo = ({ stepdata }) => {
  const { step, icon, title, description } = stepdata;
  return (
    <div className="card w-full  text-center shadow-xl">
      <div className="card-body ">
        <h2 className="text-xl font-semibold">{step}</h2>
        <figure>
          <img src={icon} alt="Shoes" className="h-16 " />
        </figure>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InstractionInfo;
