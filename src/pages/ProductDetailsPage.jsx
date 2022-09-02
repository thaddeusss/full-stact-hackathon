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
              <h2>Id: {productDetails.id}</h2>
            </div>
            <h4>Price: {productDetails.price}</h4>
            <div class="product-main">
              <div class="focus">
                <span>Описание</span>
                <span></span>
              </div>
              <p>{productDetails.desc}</p>
            </div>
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
