import React from "react";
import exit from "./image/exit.svg";
import settings from "./image/settings.svg";
import "./index.css";
const Header = () => {
  const fisrt = () => {
    document.getElementById("all1").style.visibility = "visible";
    document.getElementById("all2").style.visibility = "hidden";
    document.getElementById("all3").style.visibility = "hidden";
    document.getElementById("all4").style.visibility = "hidden";
    document.getElementById("all5").style.visibility = "hidden";
  };
  const second = () => {
    document.getElementById("all1").style.visibility = "hidden";
    document.getElementById("all2").style.visibility = "visible";
    document.getElementById("all3").style.visibility = "hidden";
    document.getElementById("all4").style.visibility = "hidden";
    document.getElementById("all5").style.visibility = "hidden";
  };
  const third = () => {
    document.getElementById("all1").style.visibility = "hidden";
    document.getElementById("all2").style.visibility = "hidden";
    document.getElementById("all3").style.visibility = "visible";
    document.getElementById("all4").style.visibility = "hidden";
    document.getElementById("all5").style.visibility = "hidden";
  };
  const forth = () => {
    document.getElementById("all1").style.visibility = "hidden";
    document.getElementById("all2").style.visibility = "hidden";
    document.getElementById("all3").style.visibility = "hidden";
    document.getElementById("all4").style.visibility = "visible";
    document.getElementById("all5").style.visibility = "hidden";
  };
  const fifth = () => {
    document.getElementById("all1").style.visibility = "hidde";
    document.getElementById("all2").style.visibility = "hidden";
    document.getElementById("all3").style.visibility = "hidden";
    document.getElementById("all4").style.visibility = "hidden";
    document.getElementById("all5").style.visibility = "visible";
  };
  return (
    <div>
      <div className="Main_Header">
        <div className="header_list">
          <div className="display_flex">
            <div>
              <ul className="main_list_ul">
                <li onClick={fisrt} className="list_child">
                  ГЛАВНАЯ
                </li>
                <li onClick={second} className="list_child">
                  ПЛАТЕЖИ
                </li>
                <li onClick={third} className="list_child">
                  ИСТОРИЯ
                </li>
                <li onClick={forth} className="list_child">
                  ПРОДУКТЫ
                </li>
                <li onClick={fifth} className="list_child">
                  ВАЛЮТЫ
                </li>
              </ul>
            </div>
            <div className="list_img_flex">
              <img className="settings" src={settings} alt=":(" />
              <img className="exit" src={exit} alt=":(" />
            </div>
          </div>

          <div className="header_border_line">
            <div id="all1" className="micro_line1"></div>
            <div id="all2" className="micro_line2"></div>
            <div id="all3" className="micro_line3"></div>
            <div id="all4" className="micro_line4"></div>
            <div id="all5" className="micro_line5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
