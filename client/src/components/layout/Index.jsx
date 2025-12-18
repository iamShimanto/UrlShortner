import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const Layout = () => {
  const userInfo = useSelector((state) => state.userData.user);

  return (
    <>
      <Navbar user={userInfo} />
      <Outlet />
    </>
  );
};

export default Layout;
