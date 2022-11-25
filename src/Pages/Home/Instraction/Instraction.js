import React from "react";
import icon1 from "../../../assets/icons/check.svg";
import icon2 from "../../../assets/icons/phone.svg";
import icon3 from "../../../assets/icons/registration.svg";
import icon4 from "../../../assets/icons/accept.svg";
import InstractionInfo from "./InstractionInfo";

const Instraction = () => {
  const stepDatas = [
    {
      step: "Step 1",
      title: "Choose Your Car",
      icon: icon1,
      description:
        "We have complied recommendation that you want to know to buy your car",
    },
    {
      step: "Step 2",
      title: "Contact Seller",
      icon: icon2,
      description:
        "After you selected a car, we arrange a viewing to seller location or one of our points",
    },
    {
      step: "Step 3",
      title: "Financing",
      icon: icon3,
      description:
        "We deal with the paper work to avail your financing and registration in 24 hours",
    },
    {
      step: "Step 4",
      title: "Get your Car",
      icon: icon4,
      description:
        "Embrace the joy of car Ownership without any of the hassle!",
    },
  ];
  return (
    <div className="py-12">
      <h2 className="text-3xl mb-8 font-bold text-slate-700">
        How to buy your car with Cars Home?
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {stepDatas.map((stepdata, index) => (
          <InstractionInfo key={index} stepdata={stepdata}></InstractionInfo>
        ))}
      </div>
    </div>
  );
};

export default Instraction;
