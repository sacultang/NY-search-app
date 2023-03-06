import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const LayoutRoutes = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutRoutes;
