import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import  AdminPage from "./pages/AdminPage";
import ProductCardPage from "./pages/ProductCardPage";





const MainRoutes = () => {
  return (
    <Routes>
      
      
      <Route path="/add" element={<AdminPage />} />
      <Route path="/Products" element={<ProductCardPage />} />
      <Route path="/About" element={<AboutUsPage />} />


    
    </Routes>
  );
};

export default MainRoutes;