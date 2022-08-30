import React from "react";
import ProductContextProvider from "./contexts/ProductContextPovider";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </AuthContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
