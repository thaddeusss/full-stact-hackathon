import React from "react";
import ProductContextProvider from "./contexts/ProductContextPovider";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return <div className="App">
    <ProductContextProvider>
<AuthContextProvider>
      <MainRoutes />
      <Footer />
      </AuthContextProvider>
    </ProductContextProvider>

  </div>;



}

export default App;
