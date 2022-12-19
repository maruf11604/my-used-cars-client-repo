/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const MyOrder = () => {
  const { user, setLoading, setBooked } = useContext(AuthContext);
  const url = `https://used-products-resale-market-server-assignment.vercel.app/bookings?email=${user?.email}`;
  console.log(user);
  if (!user?.email) {
    return <h1>loading..</h1>;
  }
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.Email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      setBooked(data);
      return data;
    },
  });
  if (isLoading) {
    <Loader></Loader>;
  }

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
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((book, index) => (
              <tr key={book._id}>
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
                          src={book?.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{book?.productName}</div>
                </td>
                <td>{book?.price}</td>
                <th>
                  {book.price && !book.paid && (
                    <Link to={`dashboard/payment/${book._id}`}>
                      <button className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0 btn-xs">
                        pay
                      </button>
                    </Link>
                  )}
                  {book.price && book.paid && (
                    <span className="text-primary">paid</span>
                  )}
                </th>
                <th>
                  <button className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0 btn-xs">
                    Report
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
