import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Rating, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreIcon from "@mui/icons-material/More";
import { useProducts } from "../../contexts/ProductContextPovider";

import "../../styles/ProductCard.css";
import { useCart } from "../../contexts/CartContextProvaider";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 250 }} className="cards">
      <CardMedia
        component="img"
        image={item.image}
        alt="img"
        className="card_img"
        sx={{ height: "60%" }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            // textOverflow: "ellipsis",
            // overflow: "hidden",
            width: "90%",
            height: "20px",
            cursor: "pointer",
          }}
        >
          {item.title}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            // textOverflow: "ellipsis",
            // overflow: "hidden",
            width: "90%",
            height: "20px",
            cursor: "pointer",
          }}
        >
          {item.id}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "90%",
            height: "20px",
            cursor: "pointer",
          }}
        >
          {item.price}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "90%",
            height: "20px",
            cursor: "pointer",
          }}
        >
          {item.desc}
        </Typography>
      </CardContent>

      <Stack spacing={1} className="rating_button">
        <Box>
          <IconButton
            className="mui-btn"
            onClick={() => addProductToCart(item)}
          >
            <ShoppingBasketIcon
            // color={checkProductInCart(item.id) ? "primary" : ""}
            // sx={{ mr: "5px" }}
            />
          </IconButton>
          <IconButton className="mui-btn">
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Stack>

      <CardActions>
        <Button onClick={() => deleteProduct(item.id)} className="mui-btn">
          <DeleteOutlineIcon />
        </Button>

        <Button
          onClick={() => navigate(`/edit/${item.id}`)}
          className="mui-btn"
        >
          <EditIcon />
        </Button>

        <Button
          className="mui-btn"
          onClick={() => navigate(`/products/${item.id}`)}
        >
          <MoreIcon />
        </Button>
      </CardActions>
      <Button className="mui-btn-primary" onClick={() => navigate("/trade")}>
        exchange
      </Button>
    </Card>
  );
}
