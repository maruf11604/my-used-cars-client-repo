import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const { addvartiseadd } = useContext(AuthContext);

  return (
    <div>
      <h2 className="font-bold text-center text-2xl  text-slate-800">
        All Advertise
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  py-6 ">
        {
          <AdvertiseCard
            key={addvartiseadd._id}
            addvartise={addvartiseadd}
          ></AdvertiseCard>
        }
      </div>
    </div>
  );
};

export default Advertise;
