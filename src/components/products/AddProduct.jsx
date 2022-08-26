import {
  Box,
  Button,
  createTheme,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextPovider";
import "../../styles/AddProduct.css";

const AddProduct = () => {
  const { getCategories, categories, addProducts } = useProducts();

  const [product, setProduct] = useState({
    title: "",
    desc: "",
    categories: [1],
    owner: "",
    image: "",
  });

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
    newProduct.append("image", product.image);
    addProducts(newProduct);
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
        Add new product
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
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
