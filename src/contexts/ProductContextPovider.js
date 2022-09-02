import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../helpers/consts";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  productDetails: {},
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
}

const API = "https://cathelmet.herokuapp.com";

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/changing/product/${window.location.search}`,
        config
      );
      console.log(res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API}/changing/categories/`, config);
      console.log(res);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProducts(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/changing/product/`,
        newProduct,
        config
      );
      console.log(res);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.delete(`${API}/changing/product/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  const search = async (value) => {
    const { data } = await axios(`${API}changing/product/search/?q=${value}`);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${API}/changing/product/${id}/`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  async function saveEditProduct(newProduct, id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization,
        },
      };
      await axios.patch(`${API}/changing/product/${id}/`, newProduct, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  async function exchanching(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/changing/product/add_to_trade/`,
        newProduct,
        config
      );
    } catch (error) {
      console.log(error);
    }
  }

  // const getOneProducr = async (id) => {
  //   const { data } = await axios.get(`${API}/changing/product/${id}/`);
  //   dispatch({
  //     type: ACTIONS.GET_PRODUCT_DETAILS,
  //     payload: data,
  //   });
  // };

  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${API}/changing/product/${id}/`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  async function exchanching(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/changing/product/add_to_trade/`,
        newProduct,
        config
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <productContext.Provider
      value={{
        addProducts,
        getProducts,
        getCategories,
        deleteProduct,
        saveEditProduct,
        search,
        getProductDetails,

        fetchByParams,

        exchanching,
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        productDetails: state.productDetails,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
