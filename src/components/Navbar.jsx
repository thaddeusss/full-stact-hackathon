import React, { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import "../styles/Navbar.css"
import SyncIcon from "@mui/icons-material/Sync";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import cart from "../assets/icons/Vector@2x.svg";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';21
import Search from "../assets/icons/search.svg";
import { Link } from "react-router-dom";
import house from "../assets/icons/house-solid.svg"
import HomeIcon from '@mui/icons-material/Home';
import LaptopIcon from '@mui/icons-material/Laptop';
import ChairIcon from '@mui/icons-material/Chair';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Menu from "./Menu";
const Navbar = () => {


  const [changeColorConfirm, setChangeColorConfirm] = useState('#adadad')

    
  return <div>
  <div className="navbar">
    <ul className="nav">
      <Link to="/about" style={{ textDecoration: "none", color: "black"}}>
      <li> О нас </li>
      </Link>
      <Link to="#" style={{ textDecoration: "none", color: "black"}}>
      <li> Помощь </li>
      </Link>
      <Link to="#" style={{ textDecoration: "none", color: "black"}}>
      <li> Как все работает </li>
      </Link>
      <div>
        <InstagramIcon className="icon" sx={{ color: "#6F73EE" }} />
        <FacebookIcon className="icon" sx={{ color: "#6F73EE" }} />
        <TelegramIcon className="icon" sx={{ color: "#6F73EE" }} />
      </div>

    </ul>

    <div className="number">
      +996997555114 +
    </div>
  </div>
    <div className="nav2">
      <Menu/>
      <div>
        <Link to="/products">
          <SyncIcon sx={{ color: "#6F73EE" }} className="logo"/>
        </Link>
        <Link to="/register"  className="profile">
          <PersonOutlineIcon sx={{ color: "#6F73EE", ml: '6vw' }} />
        </Link>
      </div>

      <div className="input_box">
        <input className="input_search"></input>222222222222
        <img src={Search} alt="" className="search_icon" />
      </div>
      <div >
                            <InstagramIcon className="icon" style={{ color: "white" }} />
                            <FacebookIcon className="icon" style={{ color: "white" }} />
                            <TelegramIcon className="icon" style={{ color: "white" }} />
                        </div>
                        <div sx={{ m: 5 }} className="icons">
        <FavoriteBorderIcon sx={{ color: "white" }} />
        <img src={cart} alt="" sx={{ mb: "4px", width: '22px' }} className="cart" />

                   </div>
        <div> корзина</div>
      </div>

    </div>
    <div className="filter">
      {/* <img src={house} alt=""  className="navbar_filter_img"/> */}
      <div>


        <HomeIcon sx={{ color: "#6F73EE",  width: "25%", height: "inherit" }} className="filter_icon" />
      </div>
      <div>

        <LaptopIcon sx={{ color: "#6F73EE",  width: "25%", height: "inherit" }} className="filter_icon" />
      </div>
      <div>

        <ChairIcon sx={{ color: "#6F73EE",  width: "25%", height: "inherit" }} className="filter_icon" />
      </div>
      <div>

        <DirectionsCarFilledIcon sx={{ color: "#6F73EE",  width: "25%", height: "inherit" }} className="filter_icon" />
      </div>
      <div>

        <CheckroomIcon sx={{ color: "#6F73EE",  width: "25%", height: "inherit" }} className="filter_icon" />
      </div>
      <div>

        <SportsBasketballIcon sx={{ color: "#6F73EE",  width: "25%", height: "inherit" }} className="filter_icon" />
      </div>
    </div> 
  </div>
};

export default Navbar;
