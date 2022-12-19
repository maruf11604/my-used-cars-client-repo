// import React, { useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider";
// import useSeller from "../../hooks/useSeller";
// import Loader from "../../Pages/Shared/Loader/Loader";

// const UserRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const [isUser, isSellerLoading] = useSeller(user?.email);

//   if (loading || isSellerLoading) {
//     return <Loader></Loader>;
//   }
//   if (isUser) {
//     return children;
//   }
// };

// export default UserRoute;
