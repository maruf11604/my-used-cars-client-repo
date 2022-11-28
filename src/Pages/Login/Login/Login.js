import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data, event) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-80">
        <h2 className="text-3xl text-center mb-7">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="text"
              className="input input-bordered w-full "
              {...register("email", { required: "Email Address is required" })}
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <input value="Login" className="btn mt-3 w-full" type="submit" />
        </form>
        {loginError && <p className="text-red-600">{loginError}</p>}
        <p>
          new to Cars home?{" "}
          <Link className="text-primary" to="/signup">
            Create new Account
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

export default Login;
