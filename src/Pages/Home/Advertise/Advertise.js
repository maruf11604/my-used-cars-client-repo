import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const { addvartise } = useContext(AuthContext);

  const results = [addvartise];

  return (
    <div>
      <h2 className="font-bold text-center text-2xl  text-slate-800">
        All Advertise
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  py-6 ">
        {results?.map((result, index) => (
          <AdvertiseCard key={index} result={result}></AdvertiseCard>
        ))}
      </div>
    </div>
  );
};

export default Advertise;
