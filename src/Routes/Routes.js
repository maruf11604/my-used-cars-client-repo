import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Blog from "../Pages/Home/Blog/Blog";
import CategoryDetails from "../Pages/Home/Category/CategoryDetails/CategoryDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/productOptions/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productOptions/${params.id}`),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
