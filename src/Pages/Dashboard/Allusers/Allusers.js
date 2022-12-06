import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const Allusers = () => {
  const [deletingBuyers, setDeletingBuyers] = useState(null);
  const closeModal = () => {
    setDeletingBuyers(null);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-products-resale-market-server-assignment.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAlldelete = (user) => {
    fetch(
      `https://used-products-resale-market-server-assignment.vercel.app/users/${user._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
        }
        refetch();
        toast.success("deleted successfully");
      });
  };

  const handleMakeAdmin = (id) => {
    fetch(
      `https://used-products-resale-market-server-assignment.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successfully");
          refetch();
        }
      });
  };
  const handleMakeSeller = (id) => {
    fetch(
      `https://used-products-resale-market-server-assignment.vercel.app/users/seller/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make seller successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">all users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Admin</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <label
                    onClick={() => setDeletingBuyers(user)}
                    htmlFor="confirm-modal"
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </label>
                </td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <th>
                  {user?.role !== "seller" && (
                    <button
                      onClick={() => handleMakeSeller(user._id)}
                      className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0 btn-xs"
                    >
                      Seller
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingBuyers && (
        <ConfirmationModal
          title={"are you sure you want to delete?"}
          message={"If you delete it can not be recover"}
          closeModal={closeModal}
          successAction={handleAlldelete}
          successButtonName="delete"
          productData={deletingBuyers}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Allusers;
