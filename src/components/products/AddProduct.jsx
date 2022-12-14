import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { useProducts } from "../../contexts/ProductContextPovider";
import "../../styles/AddProduct.css";

const AddProduct = () => {
  const { getCategories, categories, addProducts } = useProducts();

  const [product, setProduct] = useState({
    title: "",
    desc: "",
    categories: [0],
    owner: "",
    price: "",
    room_name: "",
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
    newProduct.append("price", product.price);
    newProduct.append("room_name", product.room_name);
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
        marginBottom: "8vh",
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
        label="Price"
        variant="outlined"
        fullWidth
        name="price"
        onChange={handleInp}
        value={product.price}
      />
      <TextField
        className="inp"
        sx={{ m: 1 }}
        id="standard-basic"
        label="room_name"
        variant="outlined"
        fullWidth
        name="room_name"
        onChange={handleInp}
        value={product.room_name}
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
      <FormControl sx={{ mt: 1 }} fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="??????????????????"
          onChange={handleInp}
          value={product.categories}
          name="categories"
        >
          {categories?.map((item) => (
            <MenuItem value={item.id} key={item.id} onChange={handleInp}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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
