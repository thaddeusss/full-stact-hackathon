import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../styles/Navbar.css";
import SyncIcon from "@mui/icons-material/Sync";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import cart from "../assets/icons/Vector@2x.svg";
import Search from "../assets/icons/search.svg";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import HomeIcon from "@mui/icons-material/Home";
import LaptopIcon from "@mui/icons-material/Laptop";
import ChairIcon from "@mui/icons-material/Chair";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import Menu from "./Menu";
import { useProducts } from "../contexts/ProductContextPovider";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { Button } from "@mui/material";

const Navbar = () => {
  const { search, getProducts, fetchByParams } = useProducts();
  const [stateSearch, setSearch] = useState("");
  const { user, checkAuth, error } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    setSearch();
  }, [search]);
  console.log(stateSearch);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <div>
      <div>
        <div className="navbar">
          <ul className="nav">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li> О нас </li>
            </Link>
            <Link to="#" style={{ textDecoration: "none", color: "black" }}>
              <li> Помощь </li>
            </Link>
            <Link to="#" style={{ textDecoration: "none", color: "black" }}>
              <li> Как все работает </li>
            </Link>
            <div>
              <InstagramIcon className="icon" sx={{ color: "#6F73EE" }} />
              <FacebookIcon className="icon" sx={{ color: "#6F73EE" }} />
              <a href="https://web.telegram.org/z/">
                <TelegramIcon className="icon" sx={{ color: "#6F73EE" }} />
              </a>
            </div>
          </ul>

          <div className="number">+996997555114 +</div>
        </div>
        <div className="nav2">
          <Menu />
          <div>
            <Link to="/products">
              <SyncIcon sx={{ color: "#6F73EE" }} className="logo" />
            </Link>

            {user ? (
              <Link to="/profile" className="profile">
                <PersonOutlineIcon sx={{ color: "#6F73EE", ml: "6vw" }} />
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <Button color="inherit">Register</Button>
                </Link>

                <Link to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
              </>
            )}
          </div>

          <div className="input_box">
            <input
              className="input_search"
              value={stateSearch}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <img src={Search} alt="" className="search_icon" />
          </div>

          <div
            sx={{ m: 5, display: "flex", justifyContent: "space-between" }}
            className="icons"
          >
            <FavoriteBorderIcon sx={{ color: "grey" }} />
            <img
              src={cart}
              alt=""
              sx={{ mb: "4px", width: "22px" }}
              className="cart"
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>
      </div>
      <div
        className="filter"
        onChange={(e) => fetchByParams("type", e.target.value)}
      >
        <div>
          <HomeIcon
            sx={{ color: "#6F73EE", width: "25%", height: "inherit" }}
            className="filter_icon"
          />
        </div>
        <div>
          <LaptopIcon
            sx={{ color: "#6F73EE", width: "25%", height: "inherit" }}
            className="filter_icon"
          />
        </div>
        <div>
          <ChairIcon
            sx={{ color: "#6F73EE", width: "25%", height: "inherit" }}
            className="filter_icon"
          />
        </div>
        <div>
          <DirectionsCarFilledIcon
            sx={{ color: "#6F73EE", width: "25%", height: "inherit" }}
            className="filter_icon"
          />
        </div>
        <div>
          <CheckroomIcon
            sx={{ color: "#6F73EE", width: "25%", height: "inherit" }}
            className="filter_icon"
          />
        </div>
        <div>
          <SportsBasketballIcon
            sx={{ color: "#6F73EE", width: "25%", height: "inherit" }}
            className="filter_icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
