import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="m-3">
      <h2 className="text-3xl ">payment for {data.productName}</h2>
      <h4 className="text-xl">
        Please pay{" "}
        <strong>
          ${data.price} for {data.productName}
        </strong>
      </h4>
      <div className="w-96 py-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
