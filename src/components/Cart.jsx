// import React, { useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Box } from "@mui/system";
// import { Button, TextField, Typography } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useCart } from "../contexts/CartContextProvaider";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// export default function Cart() {
//   const { getCart, changeProductCount, deleteProductInCart, cart } = useCart();

//   useEffect(() => {
//     getCart();
//   }, []);
//   console.log(cart);

//   function cartCleaner() {
//     localStorage.removeItem("cart");
//     getCart();
//   }

//   const trHeadStyle = {
//     backgroundColor: "#666699 !important",
//   };

//   return (
//     <div>
//       {cart ? (
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell sx={trHeadStyle}>Picture</StyledTableCell>
//                 <StyledTableCell sx={trHeadStyle} align="right">
//                   Name
//                 </StyledTableCell>
//                 <StyledTableCell sx={trHeadStyle} align="right">
//                   Type
//                 </StyledTableCell>
//                 <StyledTableCell sx={trHeadStyle} align="right">
//                   Description
//                 </StyledTableCell>

//                 <StyledTableCell sx={trHeadStyle} align="right">
//                   {" "}
//                   ---{" "}
//                 </StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {cart?.products.map((row) => (
//                 <StyledTableRow key={row.item.id}>
//                   <StyledTableCell component="th" scope="row">
//                     <img src={row.item.image} alt="" width="70" />
//                   </StyledTableCell>
//                   <StyledTableCell component="th" scope="row">
//                     {row.item.title}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.item.desc}
//                   </StyledTableCell>

//                   <StyledTableCell align="right">
//                     <TextField
//                       type="number"
//                       value={row.count}
//                       onChange={(e) =>
//                         changeProductCount(e.target.value, row.item.id)
//                       }
//                     />
//                   </StyledTableCell>

//                   <StyledTableCell align="right">
//                     {row.subPrice}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <Button
//                       onClick={() => deleteProductInCart(row.item.id)}
//                       startIcon={<DeleteIcon sx={{ color: "#666699" }} />}
//                     ></Button>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <Box sx={{ m: 5 }}>
//             <Typography variant="h6" component="div">
//               Total price: {cart?.totalPrice}
//               <Button onClick={cartCleaner}>BUY NOW</Button>
//             </Typography>
//           </Box>
//         </TableContainer>
//       ) : (
//         <h1>loading</h1>
//       )}
//     </div>
//   );
// }
import React, { useEffect } from "react";
import "../styles/Cart.css";
// import cardPageImg from "../assets/images/CardPage.png";
// import like from "../assets/icons/CPlike.svg";
import del from "../assets/icons/CPdelete.svg";
// import rarrow from "../assets/icons/right-arrow.svg";
// import larrow from "../assets/icons/left-arrow.svg";
import { useCart } from "../contexts/CartContextProvaider";
import { TextField } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { getCart, changeProductCount, deleteProductInCart, cart } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }
  const navigate = useNavigate();
  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <div className="mainCardPage">
      <div className="container">
        <h1 className="cart_h1">КОРЗИНА</h1>

        <div className="cardPage">
          <div
            className="cart-cards"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {cart?.products.map((row) => (
              <div className="cardPage_card" style={{ marginBottom: "50px" }}>
                <img
                  src={row.item.image}
                  alt="product"
                  style={{ width: "100px" }}
                />

                <div className="cardPage_info">
                  <div className="cardPage_p">
                    <p>{row.item.title}</p>
                  </div>

                  <div className="cardPage_amount-cost">
                    <div className="cardPage_amount">
                      <TextField
                        type="number"
                        value={row.count}
                        onChange={(e) =>
                          changeProductCount(e.target.value, row.item.id)
                        }
                      />
                    </div>
                    <div className="cardPage_cost">
                      <p className="cardPage_cos">Цена:</p>
                      <p>{row.item.price}$</p>
                    </div>
                  </div>
                </div>

                <div className="cardPage_like-delete">
                  <a
                    className="CPdelete"
                    onClick={() => deleteProductInCart(row.item.id)}
                  >
                    <img src={del} alt="delete" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="cardPage_sum">
            <div className="cardPage_sum-cost-check">
              <div className="cardPage_sum-cost">
                <h3>СУММА ЗАКАЗА</h3>
                <p
                  className="cardPage_sum__cost"
                  style={{ marginBottom: "20px" }}
                >
                  {cart?.totalPrice} $
                </p>
              </div>
            </div>
            <button className="cardPage_sum__btn" onClick={cartCleaner}>
              <a onClick={() => navigate("/CreditCard")}>ОФОРМИТЬ ЗАКАЗ</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
