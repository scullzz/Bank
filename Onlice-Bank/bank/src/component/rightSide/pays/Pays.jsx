import React, { useRef } from "react";
import mobile from "./image/mobile.svg";
import internet from "./image/internet.svg";
import home from "./image/home-services.svg";
import gosusiugi from "./image/gosuslugi-3.svg";
import credit from "./image/credit-operations.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.css";
const Pays = () => {
  const SliderR = useRef(null);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      pImage: mobile,
      pPar: "Мобильная свзяь",
    },
    {
      pImage: internet,
      pPar: "Интернет, телефония, ТВ",
    },
    {
      pImage: home,
      pPar: "Коммунальные услуги",
    },
    {
      pImage: gosusiugi,
      pPar: "Госуслуги",
    },
    {
      pImage: credit,
      pPar: "Погашение кредита",
    },
  ];

  const first = () => {
    document.getElementById("li1").style.fontWeight = 700;
    document.getElementById("li1").style.color = "black";
    document.getElementById("li2").style.fontWeight = 500;
    document.getElementById("li2").style.color = "#808185";
    document.getElementById("li3").style.fontWeight = 500;
    document.getElementById("li3").style.color = "#808185";
    document.getElementById("li4").style.fontWeight = 500;
    document.getElementById("li4").style.color = "#808185";

    document.getElementById("line1").style.visibility = "visible";
    document.getElementById("line2").style.visibility = "hidden";
    document.getElementById("line3").style.visibility = "hidden";
    document.getElementById("line4").style.visibility = "hidden";
  };
  const second = () => {
    document.getElementById("li1").style.fontWeight = 500;
    document.getElementById("li1").style.color = "#808185";
    document.getElementById("li2").style.fontWeight = 700;
    document.getElementById("li2").style.color = "black";
    document.getElementById("li3").style.fontWeight = 500;
    document.getElementById("li3").style.color = "#808185";
    document.getElementById("li4").style.fontWeight = 500;
    document.getElementById("li4").style.color = "#808185";

    document.getElementById("line1").style.visibility = "hidden";
    document.getElementById("line2").style.visibility = "visible";
    document.getElementById("line3").style.visibility = "hidden";
    document.getElementById("line4").style.visibility = "hidden";
  };
  const third = () => {
    document.getElementById("li1").style.fontWeight = 500;
    document.getElementById("li1").style.color = "#808185";
    document.getElementById("li2").style.fontWeight = 500;
    document.getElementById("li2").style.color = "#808185";
    document.getElementById("li3").style.fontWeight = 700;
    document.getElementById("li3").style.color = "black";
    document.getElementById("li4").style.fontWeight = 500;
    document.getElementById("li4").style.color = "#808185";

    document.getElementById("line1").style.visibility = "hidden";
    document.getElementById("line2").style.visibility = "hidden";
    document.getElementById("line3").style.visibility = "visible";
    document.getElementById("line4").style.visibility = "hidden";
  };
  const forth = () => {
    document.getElementById("li1").style.fontWeight = 500;
    document.getElementById("li1").style.color = "#808185";
    document.getElementById("li2").style.fontWeight = 500;
    document.getElementById("li2").style.color = "#808185";
    document.getElementById("li3").style.fontWeight = 500;
    document.getElementById("li3").style.color = "#808185";
    document.getElementById("li4").style.fontWeight = 700;
    document.getElementById("li4").style.color = "black";

    document.getElementById("line1").style.visibility = "hidden";
    document.getElementById("line2").style.visibility = "hidden";
    document.getElementById("line3").style.visibility = "hidden";
    document.getElementById("line4").style.visibility = "visible";
  };

  return (
    <div className="Main">
      <div className="Pre_Main_Flex1">
        <div>
          <p className="pays_page1">Платежи и переводы</p>
        </div>
        <div className="Button_Flex_main">
          <button
            onClick={() => SliderR.current.slickPrev()}
            className="button_back"
          >
            <p className="button_front">&lt;</p>
          </button>
          <button
            onClick={() => SliderR.current.slickNext()}
            className="button_back"
          >
            <p className="button_front">&gt;</p>
          </button>
        </div>
      </div>
      <div>
        <div className="main_data_flex_">
          <Slider ref={SliderR} {...settings}>
            {data.map((d) => {
              return (
                <div className="gos_back_">
                  <div className="o">
                    <img src={d.pImage} alt=":(" />
                    <p className="data_par_">{d.pPar}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="Transactoin_Main">
        <div>
          <ul className="Nav_Transactoin_Flex">
            <li id="li1" onClick={first} className="t_child">
              Между своими счетами
            </li>
            <li id="li2" onClick={second} className="t_child">
              На другую карту
            </li>
            <li id="li3" onClick={third} className="t_child">
              По номеру телефона
            </li>
            <li id="li4" onClick={forth} className="t_child">
              Запросить средств
            </li>
          </ul>
          <div className="Transaction_Under_Line_Full">
            <div id="line1" className="Transaction_Under_Line_Child1"></div>
            <div id="line2" className="Transaction_Under_Line_Child2"></div>
            <div id="line3" className="Transaction_Under_Line_Child3"></div>
            <div id="line4" className="Transaction_Under_Line_Child4"></div>
          </div>
        </div>
        <div className="Main_inputs_Flexes">
          <div className="T_firt_inpt_flex">
            <input
              className="Transact_One_Input"
              type="text"
              placeholder="Счёт списания"
            />
            <input
              className="Transact_Two_Input"
              type="text"
              placeholder="Счёт пополнения"
            />
          </div>
          <div className="T_second_input_flex">
            <input
              className="Transact_Three_Input"
              type="text"
              placeholder="Сумма"
            />
            <button className="Transact_Four_Button">Перевести</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pays;
