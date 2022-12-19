import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const MyProduct = () => {
  const { user, setLoading, verified, setAdvertiseadd, booked } =
    useContext(AuthContext);
  console.log(booked);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const url = `http://localhost:5000/addproducts?email=${user?.email}`;

  const closeModal = () => {
    setDeletingProduct(null);
  };

  const handleAdd = (add) => {
    setAdvertiseadd(add);
  };
  const { data: myProduct = [], refetch } = useQuery({
    queryKey: ["myProduct", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();

      return data;
    },
  });

  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/addproducts/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("deleted product successfully");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">My Product</h2>
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
              <th>validity</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {myProduct?.map((book, index) => (
              <tr key={index}>
                <th>
                  {verified._id === user._id ? (
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked="checked"
                      />
                    </label>
                  ) : (
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  )}
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
                  <div className="font-bold">{book?.name}</div>
                </td>
                <td>{book?.price}</td>
                <th>
                  <label
                    onClick={() => setDeletingProduct(book)}
                    htmlFor="confirm-modal"
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </label>
                </th>
                <th>
                  <button className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0 btn-xs">
                    available
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleAdd(myProduct[index])}
                    className="btn bg-gradient-to-r from-indigo-500 to-blue-500 border-0 btn-xs"
                  >
                    advertise
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          title={"are you sure you want to delete?"}
          message={"If you delete it can not be recover"}
          closeModal={closeModal}
          successAction={handleDeleteProduct}
          successButtonName="delete"
          productData={deletingProduct}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProduct;
