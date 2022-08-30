import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextPovider";
import "../styles/ProductDetails.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);
  console.log(productDetails);

  return (
    <div>
      <div class="wrapper">
        <div class="card">
          <div class="product-left">
            <div class="header">
              <h1>{productDetails.title}</h1>
              <h4>{productDetails.category}</h4>
            </div>
            {/* <!--DESCRIPITON / DETAILS--> */}
            <div class="product-main">
              <div class="focus">
                <span>Описание</span>
                <span></span>
              </div>
              <p>{productDetails.desc}</p>
            </div>
            {/* <!-- ADD TO CART BUTTON --> */}
            <div class="product-btns">
              <a href="#" class="product-add">
                Забрать
              </a>
            </div>
          </div>
          <div class="product-right">
            <img
              className="pd_img"
              src="https://softech.kg/image/cache/d7f592a52318a514381813d58e6e140e.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
