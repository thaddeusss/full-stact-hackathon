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

import { useProducts } from "../contexts/ProductContextPovider";
// import "../../styles/AddProduct.css";

const AddTrade = () => {
  const { exchanching } = useProducts();

  const [trade, settrade] = useState({
    user1: "",
    user2: "",
    Product1: "",
    Product2: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "Product2") {
      settrade({
        ...trade,
        [e.target.name]: e.target.files[0],
      });
    } else {
      settrade({
        ...trade,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSave() {
    let newtrade = new FormData();
    newtrade.append("user1", trade.user1);
    newtrade.append("user2", trade.user2);
    newtrade.append("Product1", trade.Product1);
    newtrade.append("Product2", trade.Product2);
    exchanching(newtrade);
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
        Add new trade
      </Typography>
      <TextField
        className="inp"
        sx={{ outlineColor: "main" }}
        id="standard-basic"
        label="user1"
        variant="outlined"
        fullWidth
        name="user1"
        onChange={handleInp}
        value={trade.user1}
      />
      <TextField
        className="inp"
        sx={{ m: 1 }}
        id="standard-basic"
        label="user2"
        variant="outlined"
        fullWidth
        name="user2"
        onChange={handleInp}
        value={trade.desc}
      />
      <TextField
        className="inp"
        sx={{ m: 1 }}
        id="standard-basic"
        label="Product1"
        variant="outlined"
        fullWidth
        name="Product1"
        onChange={handleInp}
        value={trade.Product1}
      />

      <TextField
        className="inp"
        sx={{ m: 1 }}
        id="standard-basic"
        label="Product2"
        variant="outlined"
        fullWidth
        name="Product2"
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
        ADD trade
      </Button>
    </Box>
  );
};

export default AddTrade;
