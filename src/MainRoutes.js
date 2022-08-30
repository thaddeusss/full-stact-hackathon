import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";


import NotFoundPage from "./pages/NotFoundPage";
import ProductCardPage from "./pages/ProductCardPage";

import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import ProductCardPage from "./pages/ProductCardPage";
import CartPage from "./pages/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [];
  return (
    <Routes>
      <Route path="/add" element={<AdminPage />} />
      <Route path="/products" element={<ProductCardPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/details" element={<ProductDetailsPage />} /> */}
      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/cart" element={<CartPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />

      <Route path="/*" element={<NotFoundPage />} />

      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
