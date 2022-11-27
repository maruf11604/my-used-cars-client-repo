import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({ carView, setCarView }) => {
  const { user } = useContext(AuthContext);
  console.log(carView);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.pname.value;
    const buyerName = form.bname.value;
    const buyerEmail = form.email.value;
    const price = form.rprice.value;
    const mobile = form.phone.value;
    const meetLocation = form.location.value;

    const booking = {
      productName,
      buyerName,
      buyerEmail,
      price,
      mobile,
      meetLocation,
    };
    console.log(booking);
    form.reset();
    setCarView(null);
    toast.success("The item is booked");
  };
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
          <h3 className="text-lg font-bold text-center">Booking Car</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4">
            <p>
              <input
                type="text"
                name="pname"
                className="input input-bordered w-full "
                value={carView.productName}
                disabled
              />
            </p>
            <input
              type="text"
              name="bname"
              className="input input-bordered w-full "
              value={user.displayName ? user.displayName : "name not provided"}
              disabled
            />
            <input
              type="text"
              name="email"
              className="input input-bordered w-full "
              value={user.email}
              disabled
            />

            <p>
              <input
                type="text"
                name="rprice"
                className="input input-bordered w-full "
                value={carView.resalePrice}
                disabled
              />
            </p>
            <input
              type="text"
              name="phone"
              className="input input-bordered w-full "
              placeholder="Your Number"
            />
            <input
              type="text"
              name="location"
              className="input input-bordered w-full  "
              placeholder="Your Location"
            />
            <input type="Submit" className=" w-full btn " value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
