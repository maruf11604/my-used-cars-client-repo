import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?buyerEmail= ${user?.buyerEmail}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.buyerEmail],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-2xl font-bold m-4">My Orders</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="bg-slate-500">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th></th>
              <th>Avatar</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book, index) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={book.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{book.productName}</div>
                </td>
                <td>{book.price}</td>
                <th>
                  <button className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0 btn-xs">
                    pay
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
