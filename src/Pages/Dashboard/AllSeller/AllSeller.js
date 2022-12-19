import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const AllSeller = () => {
  const { verified, setverified } = useContext(AuthContext);
  const [deletingSeller, setDeletingSeller] = useState(null);

  const handlverify = (sel) => {
    setverified(sel);
    toast.success("verified successfully");
  };

  const closeModal = () => {
    setDeletingSeller(null);
  };

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://used-products-resale-market-server-assignment.vercel.app/sellers",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleSellerDelete = (value) => {
    fetch(
      `https://used-products-resale-market-server-assignment.vercel.app/sellers/${value._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("deleted seller successfully");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">All seller</h2>
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

              <th>Title</th>
              <th>Email</th>
              <th>Action</th>
              <th>validity</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((book, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>{index + 1}</th>

                <td>
                  <div className="font-bold">{book?.name}</div>
                </td>
                <td>{book?.email}</td>
                <th>
                  <label
                    onClick={() => setDeletingSeller(book)}
                    htmlFor="confirm-modal"
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </label>
                </th>
                <th>
                  <button
                    id={index}
                    onClick={() => handlverify(sellers[index])}
                    className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0 btn-xs"
                  >
                    {verified ? <p>verified</p> : <p>verifiy</p>}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingSeller && (
        <ConfirmationModal
          title={"are you sure you want to delete?"}
          message={"If you delete it can not be recover"}
          closeModal={closeModal}
          successAction={handleSellerDelete}
          successButtonName="delete"
          productData={deletingSeller}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSeller;
