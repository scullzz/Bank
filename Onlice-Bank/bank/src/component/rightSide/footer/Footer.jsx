import React from "react";
import "./index.css";
import Vector from "./image/Vector.svg";
import face from "./image/facebook.svg";
import insta from "./image/instagram.svg";
import Mask from "./image/Mask.svg";
import teleg from "./image/telegram.svg";
import open from "./image/open.svg";
const Footer = () => {
  return (
    <div>
      <div className="Main_Border">
        <div className="flex1_">
          <div>
            <ul className="First_Block_Of_Links">
              <li className="label">
                <a className="link" href="#">
                  Главная
                </a>
              </li>
              <li className="label">
                <a className="link" href="#">
                  Платежи и переводы
                </a>
              </li>
              <li className="label">
                <a className="link" href="#">
                  История
                </a>
              </li>
              <li className="label">
                <a className="link" href="#">
                  Продукты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="Second_Block_Of_Links">
              <li className="label">
                <a className="link" href="#">
                  Новости
                </a>
              </li>
              <li className="label">
                <a className="link" href="#">
                  Отделения
                </a>
              </li>
              <li className="label">
                <a className="link" href="#">
                  Банкоматы
                </a>
              </li>
              <li className="label">
                <a className="link" href="#">
                  Курсы валют
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex2_">
          <div className="BL_Flex1">
            <div>
              <p className="Parag1">+998 71 231-60-00</p>
              <p className="Parag2">Единый Call Center</p>
            </div>
            <div>
              <p className="Parag1">+998 71 289-64-44</p>
              <p className="Parag2">Факс</p>
            </div>
          </div>
          <div className="BL_Flex2">
            <div className="back_for_image">
              <img src={Vector} alt=":(" />
            </div>
            <div>
              <p className="Parag5">Мобильное приложение</p>
              <p className="Parag5">для iOS и Android</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer_Man_Flex">
        <div className="foot_flex_1">
          <p className="foot_parag1">© 2009 - 2021 АКБ «Asia Alliance Bank»</p>
          <p className="foot_parag1">
            Лицензия ЦБ РУз на проведение банковских операций №79 от 21 октября
            2017 г.
          </p>
        </div>
        <div className="connection">
          <div className="foot_flex_2">
            <a href="#">
              <img src={face} alt=":(" />
            </a>
            <a href="#">
              <img src={teleg} alt=":(" />
            </a>
            <a href="#">
              <img src={insta} alt=":(" />
            </a>
          </div>
          <div className="foot_flex_3">
            <img src={Mask} alt=":(" />
            <p className="end_par">Русский</p>
            <img src={open} alt=":(" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
