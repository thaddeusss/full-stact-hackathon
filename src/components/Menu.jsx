import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Menu.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import cart from "../assets/icons/Vector@2x.svg";


const Menu = () => {
    const [active, setActive] = useState('-100%')
    const [status, setStatus] = useState('close')
    return (
        <div className="main">
            <div
                className='menu'
                role="button"
                onClick={() => {
                    setStatus(status === 'close' ? 'open' : 'close')
                    setActive(active === '0' ? '-120%' : '0')
                }}>
                <i className={status}></i>
                <i className={status}></i>
                <i className={status}></i>
            </div>

            <div className={"tr9udk8uesdr"} style={{ left: active }} >
                <div className='menu_content'>
                    <ul className=' ul'>
                        <li><Link to="/about" style={{ textDecoration: "none", color: "white" }}> О нас       </Link></li>


                        <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                            <li> Помощь </li>
                        </Link>
                        <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                            <li> Как все работает </li>
                        </Link>
                        <div >
                            <InstagramIcon className="icon" style={{ color: "white" }} />
                            <FacebookIcon className="icon" style={{ color: "white" }} />
                            <TelegramIcon className="icon" style={{ color: "white" }} />
                        </div>
                        <div sx={{ m: 5 }} className="icons">
                            <FavoriteBorderIcon sx={{ color: "white" }} />
                            <img src={cart} alt="" sx={{ mb: "4px", width: '22px' }} className="cart" />

                        </div> </ul>
                </div>
            </div>

        </div>
    );
};

export default Menu;