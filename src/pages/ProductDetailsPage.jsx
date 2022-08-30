import React from "react";
import "../styles/ProductDetails.css";

const ProductDetailsPage = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="card">
          <div class="product-left">
            <div class="header">
              <h1>Продукт</h1>
              <h4>категория</h4>
            </div>
            {/* <!--DESCRIPITON / DETAILS--> */}
            <div class="product-main">
              <div class="focus">
                <span>Описание</span>
                <span></span>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione voluptatem quam vel, delectus expedita ullam asperiores
                laudantium modi. Voluptatum eum cum quis ea modi. Reiciendis
                asperiores aut beatae odit minima.
              </p>
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
