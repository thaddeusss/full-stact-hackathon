import ProductContextProvider from "./contexts/ProductContextPovider";
import MainRoutes from "./MainRoutes";

function App() {
  return <div className="App">
    <ProductContextProvider>

      <MainRoutes />
    </ProductContextProvider>

  </div>;
}

export default App;
