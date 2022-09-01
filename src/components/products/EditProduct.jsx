import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextPovider";

const EditProduct = () => {
  const {
    getProductDetails,
    productDetails,
    getCategories,
    categories,
    saveEditProduct,
  } = useProducts();

  const [product, setProduct] = useState(getProductDetails);

  const { id } = useParams();

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", product.title);
    newProduct.append("desc", product.desc);
    newProduct.append("owner", product.owner);
    newProduct.append("categories", product.categories);
    newProduct.append("price", product.price);
    newProduct.append("image", product.image);
    saveEditProduct(newProduct);
  }

  return (
    <Box
      sx={{
        width: "40vw",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        save product
      </Typography>
      <TextField
        className="inp"
        sx={{ outlineColor: "main" }}
        id="standard-basic"
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
        onChange={handleInp}
        value={product.title}
      />
      <TextField
        className="inp"
        sx={{ m: 1 }}
        id="standard-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="desc"
        onChange={handleInp}
        value={product.desc}
      />
      <TextField
        className="inp"
        sx={{ m: 1 }}
        id="standard-basic"
        label="owner"
        variant="outlined"
        fullWidth
        name="owner"
        onChange={handleInp}
        value={product.owner}
      />
      <TextField
        className="inp"
        sx={{ m: 1 }}
        id="standard-basic"
        label="Category"
        variant="outlined"
        fullWidth
        name="category"
      />
      <TextField
        className="inp"
        sx={{ m: 1 }}
        id="standard-basic"
        label="Price"
        variant="outlined"
        fullWidth
        name="price"
        onChange={handleInp}
        value={product.price}
      />

      <input
        type="file"
        name="image"
        className="inp-img"
        onChange={handleInp}
      />

      <Button
        sx={{
          m: 1,
        }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={handleSave}
      >
        save PRODUCT
      </Button>
    </Box>
  );
};

export default EditProduct;
