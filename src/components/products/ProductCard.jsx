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

export default function ProductCard({ item }) {
  const { deleteProduct, saveEditProduct } = useProducts();

  const navigate = useNavigate();

  return (
    <Card sx={{ width: 250 }} className="card">
      <CardMedia
        component="img"
        image={item.image}
        alt="img"
        className="card_img"
        sx={{ height: "50%" }}
      />
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
          <IconButton className="mui-btn">
            <ShoppingBasketIcon />
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

        <Button onClick={() => saveEditProduct(item.id)} className="mui-btn">
          <EditIcon />
        </Button>

        <Button className="mui-btn">
          <MoreIcon />
        </Button>
      </CardActions>
      <Button className="mui-btn-primary">exchange</Button>
    </Card>
  );
}
