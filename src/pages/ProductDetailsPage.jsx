import React from "react";
import ProductDetails from "../components/products/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div>

      <ProductDetails />

      <div class="wrapper">
        <div class="card">
          <div class="product-left">
            <div class="header">
              <h1>{productDetails.title}</h1>
            </div>
            <h4>{productDetails.price}</h4>
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
            <img className="pd_img" src={productDetails.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
