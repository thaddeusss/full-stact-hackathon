import { Grid, Link } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import "../styles/Footer.css";
import { createTheme } from "@mui/material/styles";
import inst from "../assets/icons/013-instagram 1.svg";
import yt from "../assets/icons/018-youtube 1.svg";
import teleg from "../assets/icons/003-telegram 2.svg";
import donate from "../assets/icons/Webmoney.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6F73EE",
      contrastText: "#fff",
    },
    secondary: {
      main: "#5D6C7B",
      contrastText: "#000",
    },
  },
});

const Footer = () => {
  return (
    <div className="main_footer">
      <Container maxWidth="lg" className="container">
        <Box className="footer_up">
          <Box className="footer_links">
            <Link href="#" underline="none">
              <div className="instBlock">
                <img src={inst} alt="instagram" />
                <p>Instagram</p>
              </div>
            </Link>
            <Link href="#" underline="none">
              <div className="ytBlock">
                <img src={yt} alt="youtube" />
                <p>YouTube</p>
              </div>
            </Link>
            <Link href="#" underline="none">
              <div className="telegBlock">
                <img src={teleg} alt="telegram" />
                <p>Telegram</p>
              </div>
            </Link>
            <Link href="#" underline="none">
              <div className="instBlock">
                <img src={donate} alt="donation" />
                <p>Donation</p>
              </div>
            </Link>
          </Box>
          <Box className="foot_nav">
            <Link href="#" underline="none">
              <p>Каталог</p>
            </Link>
            <Link href="#" underline="none">
              <p>Войти</p>
            </Link>
            <Link href="#" underline="none">
              <p>Регистрация</p>
            </Link>
          </Box>
        </Box>
        <Box borderBottom={1} sx={{ marginTop: "5vh" }} />
        <Box className="footer_down">
          <Box className="footer_rights">
            <p>© 2022 TradeShop. All rights reserved</p>
          </Box>
          <Box className="footer_comp">
            <Link href="#" underline="none">
              <p>Правила использования системы</p>
            </Link>
            <Link href="#" underline="none">
              <p>Информация о сайте</p>
            </Link>
            <Link href="#" underline="none">
              <p>Обратная связь</p>
            </Link>
            <Link href="#" underline="none">
              <p>Конфиденциальность</p>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
