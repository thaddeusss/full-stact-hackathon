import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextPovider";

const EditProduct = () => {
  const {
    getCategories,
    categories,
    saveEditProduct,
    getProductDetails,
    productDetails,
  } = useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setProduct(productDetails);
  }, []);

  useEffect(() => {
    getProductDetails(id);
  }, []);
  // console.log(oneProduct);

  // useEffect(() => {
  //   setProduct(productuct);
  // }, [productuct]);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("id", product.id);
    newProduct.append("title", product.title);
    newProduct.append("desc", product.desc);
    newProduct.append("room_name", product.room_name);
    newProduct.append("price", product.price);
    newProduct.append("owner", product.owner);
    newProduct.append("categories", product.categories);
    newProduct.append("image", product.image);
    let id = product.id;
    saveEditProduct(newProduct, id);
    navigate("/products");
  }

  console.log(product, "prod");

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else if (e.target.name === "categories") {
      setProduct({
        ...product,
        [e.target.name]: e.target.title,
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

  return (
    <>
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
          saveEdit
        </Typography>
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="title"
          variant="outlined"
          fullWidth
          name="title"
          onChange={handleInp}
          value={product.title || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="desc"
          variant="outlined"
          fullWidth
          name="desc"
          onChange={handleInp}
          value={product.desc || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="price"
          variant="outlined"
          fullWidth
          name="price"
          onChange={handleInp}
          value={product.price || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="room_name"
          variant="outlined"
          fullWidth
          name="room_name"
          onChange={handleInp}
          value={product.room_name || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="owner"
          variant="outlined"
          fullWidth
          name="owner"
          onChange={handleInp}
          value={product.owner || ""}
        />

        <FormControl sx={{ mt: 1 }} fullWidth>
          <InputLabel id="demo-simple-select-label">categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="categories"
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
          add save
        </Button>
      </Box>
    </>
  );
};

export default EditProduct;
