import React from "react";
import ProductContextProvider from "./contexts/ProductContextPovider";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Navbar from "./components/Navbar";
import CartContextProvider from "./contexts/CartContextProvaider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
