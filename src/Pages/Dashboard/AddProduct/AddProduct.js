import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  console.log(imageHostKey);
  const handleAddProduct = (data) => {
    console.log(data);
    const picture = data.picture[0];
    const formData = new FormData();
    formData.append("image", picture);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            name: data.pname,
            email: data.email,
            price: data.price,
            condition: data.condition,
            number: data.number,
            location: data.location,
            description: data.description,
            purchaseYear: data.yearPurchase,
            picture: imgData.data.url,
          };
          fetch("http://localhost:5000/addproducts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("product added");
              navigate("/dashboard/myproduct");
            });
        }
      });
  };
  return (
    <div className="w-80 mx-auto">
      <h2 className="text-3xl font-bold">Add Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input
            type="text"
            placeholder="Product name"
            {...register("pname", {
              required: "product name is required",
              message: "product name is required",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
            type="text"
            placeholder="user email"
            {...register("email", {
              required: "email is required",
              message: "email is required",
            })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Price</span>
          </label>

          <input
            type="text"
            placeholder="price"
            {...register("price", {
              required: "price is required",
              message: "price is required",
            })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>

          <input
            type="text"
            {...register("condition", {
              required: "condition is required",
              message: "condition is required",
            })}
            placeholder="condition"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Number</span>
          </label>

          <input
            type="text"
            {...register("number", {
              required: "number is required",
              message: "number is required",
            })}
            placeholder="Mobile number"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location</span>
          </label>

          <input
            type="text"
            {...register("location", {
              required: "location is required",
              message: "location is required",
            })}
            placeholder="location"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>

          <input
            type="text"
            {...register("description", {
              required: "description is required",
              message: "description is required",
            })}
            placeholder="description"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Year of purchase</span>
          </label>

          <input
            type="text"
            {...register("yearPurchase", {
              required: "year purchase is required",
              message: "year of purchase is required",
            })}
            placeholder="year of purchase"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Picture</span>
          </label>

          <input
            type="file"
            {...register("picture", {
              required: "picture is required",
              message: "picture is required",
            })}
            placeholder="condition"
            className="input input-bordered w-full "
          />
        </div>

        <input value="signup" className="btn mt-3 w-full" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
