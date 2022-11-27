import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ carView }) => {
  const { user } = useContext(AuthContext);
  console.log(carView);
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">Booking Modal</h3>
          <form className="grid grid-cols-1 gap-4">
            <p>
              <input
                type="text"
                className="input input-bordered w-full "
                value={carView.productName}
                disabled
              />
            </p>
            <input
              type="text"
              className="input input-bordered w-full "
              value={user.displayName ? user.displayName : "name not provided"}
              disabled
            />
            <input
              type="text"
              className="input input-bordered w-full "
              value={user.email}
              disabled
            />

            <p>
              <input
                type="text"
                className="input input-bordered w-full "
                value={carView.resalePrice}
                disabled
              />
            </p>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="Your Number"
            />
            <input
              type="text"
              className="input input-bordered w-full  "
              placeholder="Your Location"
            />
            <input type="button" className=" w-full btn " value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
