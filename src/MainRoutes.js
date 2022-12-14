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

import CartPage from "./pages/CartPage";
import EditProduct from "./components/products/EditProduct";
import CreditCardForm from "../src/pages/CreditCartPage";
import TradePage from "./pages/TradePage";

import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AdminPage />} />
      <Route path="/products" element={<ProductCardPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/details" element={<ProductDetailsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="CreditCard" element={<CreditCardForm />} />
      <Route path="Trade" element={<TradePage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
