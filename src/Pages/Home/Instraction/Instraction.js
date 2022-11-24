import React from "react";
import icon1 from "../../../assets/icons/check.svg";

const Instraction = () => {
  return (
    <div className="bg-base-100">
      <h2 className="text-3xl font-bold">
        How to buy your car with Cars Home?
      </h2>
      <div>
        {/* card one */}
        <div className="card w-96  text-center shadow-xl">
          <div className="card-body ">
            <h2 className="text-xl font-semibold">Step 1</h2>
            <figure>
              <img src={icon1} alt="Shoes" className="h-16 " />
            </figure>
            <h2 className="text-xl font-semibold">Choose Your Car</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card w-96  text-center shadow-xl">
          <div className="card-body ">
            <h2 className="text-xl font-semibold">Step 1</h2>
            <figure>
              <img src={icon1} alt="Shoes" className="h-16 " />
            </figure>
            <h2 className="text-xl font-semibold">Choose Your Car</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instraction;
