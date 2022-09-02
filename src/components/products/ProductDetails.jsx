import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextPovider";
import "../../styles/ProductDetails.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  const navigate = useNavigate();

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
            {/*  */}
            <div class="owner-btn">
              <a onClick={() => navigate("/profile")} class="prof_owner">
                Владелец
              </a>
            </div>
            {/* <!-- ADD TO CART BUTTON --> */}
            <div class="product-btns">
              <a href="#" class="product-add">
                Обменять
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
