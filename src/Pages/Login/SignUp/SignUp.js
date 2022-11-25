import { data } from "autoprefixer";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-80">
        <h2 className="text-3xl text-center mb-7">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              {...register("name", {
                required: "name is required",
                message: "name is required",
              })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="text"
              {...register("email", {
                required: "email is required",
                message: "email is required",
              })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "password must be strong one upperlatter and one special characters",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <input value="signup" className="btn mt-3 w-full" type="submit" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            Please login first
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Sign In With Google</button>
      </div>
    </div>
  );
};

export default SignUp;
