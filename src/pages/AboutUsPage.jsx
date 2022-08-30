import React from "react";
import cart from "../assets/icons/Vector@2x.svg"
import cash from "../assets/icons/Vector.svg"
import plus from "../assets/icons/Vector (1).svg"
import dostavks from "../assets/icons/delivery 1.svg"
import "../styles/About.css"
import SyncIcon from "@mui/icons-material/Sync";
import { Link } from "@mui/material";

const AboutUsPage = () => {



  return <div className="about">
    <div className="h1"><h1>Предлагаем обмен разных вещей, по согласия клиентов</h1>
      <h5> И будем забоиться об удобстве клиента </h5></div>
    
      <div className="content_block">
     
        <div className="box">
          <img src={cart} alt=""></img>
          <h3>Любые товары которых можно обменять</h3>

          <div>
            Любые товары которые долго искали или просто захотели преобрезти, удобный коталог и поисковик
          </div>

        </div>
     
      <div className="box">
        <img src={cash} alt=""></img>

        <h3>Плюсы нашего сайта</h3>

        <div>В нашем сайте нету покупок, вы можете по согласию даже скрепку обменять на дом так что удачи вам в нашем сайте</div>

      </div>

      <div className="box">
        <img src={plus} alt=""></img>

        <h3>Безопасность и быстрота</h3>

        <div> Мы даем полную гарантию на наши обмены, не беспокайтесь что вы просто отправляете свои вещи</div>
      </div>
      </div>
<div className="content_block1">
      <div className="block1">
        <img src={dostavks} alt=""></img>

        <h3> Доставка</h3>

        <div>У нас есть доставка, если кому то понадаиться доставка мы и это устроем, просто укажите куда и мы скажим когда и в срок все придет </div>
      </div>

      <div className="block1">

   <SyncIcon sx={{ color: "#6F73EE" }} />
        <h3>Одни</h3>


        <div > мы в таком деле одни в нашеи городе, но в переди нас ждет много успехов, так что не сомневайтесь о нас !!!</div>


      </div>
      <div className="block1 navigate"><h1>посмотрите интерсное</h1>
      <Link to="/Products">
      <button className="btn_block">перейти</button>
      </Link>
      </div>
      </div>
    </div>

};

export default AboutUsPage;
