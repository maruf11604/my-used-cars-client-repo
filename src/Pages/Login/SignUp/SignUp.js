import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [buttonSeller, setButtonSeller] = useState(null);
  const [buttonBuyer, setButtonBuyer] = useState(null);
  const [signUpError, setSignUpError] = useState("");
  const [createUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createUserEmail);
  // console.log(buttonBuyer);
  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");
        const userInfo = {
          person: data.radio,
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(data.radio, data.name, data.email, data.password);

            saveSeller(data.radio, data.name, data.email, data.password);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUser("Buyer", user.displayName, user.email, "");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const saveUser = (person, name, email, password) => {
    const user = { person, name, email, password };
    fetch(
      "https://used-products-resale-market-server-assignment.vercel.app/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
        navigate(from, { replace: true });
      });
  };

  const saveSeller = (person, name, email, password) => {
    const seller = { person, name, email, password };
    fetch(
      "https://used-products-resale-market-server-assignment.vercel.app/sellers",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(seller),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("save seller", data);
        navigate(from, { replace: true });
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-80">
        <h2 className="text-3xl text-center mb-7">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Who are you?Buyer or seller?</span>
            </label>
            {/* buyer */}
            <label onClick={() => setButtonBuyer("Buyer")} className="label">
              <span className="label-text">Buyer</span>
              <input {...register("radio")} type="radio" value="Buyer" />
            </label>
            {/* seller */}
            <label onClick={() => setButtonSeller("Seller")} className="label">
              <span className="label-text">Seller</span>
              <input {...register("radio")} type="radio" value="Seller" />
            </label>

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

        {signUpError && <p className="text-red-600">{signUpError}</p>}
        <p>
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            Please login first
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
