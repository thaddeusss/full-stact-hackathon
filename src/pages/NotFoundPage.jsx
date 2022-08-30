import React from "react";
import { Button } from "@mui/material";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";
const NogtFoundPage = () => {
  return (
    <div className="not-main">
      <h1 className="not_h1" data-text="back in black">
        Страница не найдена
      </h1>
      <h2 className="not_h2">
        Кажется, что-то пошло не так! Запрашиваемая страница не существует.
        Возможно, она устарела или была удалена.
      </h2>
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
        <Button className="mui-btn-primary">Напишите нам</Button>
      </a>
    </div>
  );
};

export default NogtFoundPage;
