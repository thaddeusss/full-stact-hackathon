import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import ProductCardPage from "./pages/ProductCardPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [];
  return (
    <Routes>
      <Route path="/add" element={<AdminPage />} />
      <Route path="/Products" element={<ProductCardPage />} />
      <Route path="/About" element={<AboutUsPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
