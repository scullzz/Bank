import React, { useRef } from "react";
import "./index.css";
import base from "./image/base.svg";
import mobiuz from "./image/mobiuz.svg";
import beeline from "./image/beeline.svg";
import uztelecom from "./image/uztelecom.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import add from "./image/add.svg";
import Slider from "react-slick";
import hor from "./image/hor.svg";
const AutoPay = () => {
  const ButtonRef = useRef(null);
  const ButtonRef1 = useRef(null);
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

  const Data = [
    {
      DImage: base,
      OImage: hor,
      dParag1: "За детский садик ",
      dValue: "450 000 UZS",
      dTime: "28 фев",
    },
    {
      DImage: mobiuz,
      OImage: hor,
      dParag1: "На свой телефон",
      dValue: "69 000 UZS",
      dTime: "28 фев",
    },
    {
      DImage: beeline,
      OImage: hor,
      dParag1: "Маме на телефон",
      dValue: "50 000 UZS",
      dTime: "28 фев",
    },
    {
      DImage: uztelecom,
      OImage: hor,
      dParag1: "За интерент",
      dValue: "150 000 UZS",
      dTime: "28 фев",
    },
    {
      DImage: base,
      OImage: hor,
      dParag1: "Аренда машины",
      dValue: "4 569 000 UZS",
      dTime: "28 фев",
    },
  ];
  const data2 = [
    {
      DImage: mobiuz,
      OImage: hor,
      dParag1: "Мой номер",
      dValue1: "+998 97 449 61 11",
    },
    {
      DImage: base,
      OImage: hor,
      dParag1: "Карта Зарины",
      dValue1: "**8923",
    },
    {
      DImage: base,
      OImage: hor,
      dParag1: "Карта Сухроба",
      dValue1: "**2211",
    },
    {
      DImage: beeline,
      OImage: hor,
      dParag1: "Номер мамы",
      dValue1: "+998 90 991 99 11",
    },
    {
      DImage: base,
      OImage: hor,
      dParag1: "Карта Елены",
      dValue1: "**5502",
    },
  ];

  return (
    <div className="Main">
      <div className="Auto_First_Flex">
        <p className="Auto_par_first">Шаблоны и автоплатежи</p>
        <div className="auto_first_child_flex">
          <img src={add} alt=":(" />
          <p className="auto_par_second_same">Создать новый</p>
        </div>
      </div>
      <div className="Delay_Main_Flex_">
        <div>
          <p className="delay_parag">Ближайшие запланированные платежи</p>
        </div>
        <div className="Delay_main_Flex_Buttons">
          <button
            onClick={() => ButtonRef.current.slickPrev()}
            className="Delay_Button1"
          >
            &lt;
          </button>
          <button
            onClick={() => ButtonRef.current.slickNext()}
            className="Delay_Button2"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="Auto_Slider_Main_Back">
        <Slider ref={ButtonRef} {...settings}>
          {Data.map((d) => {
            return (
              <div className="Auto_Slider_Children_Back">
                <div className="Auto_slider_first_flex">
                  <img src={d.DImage} alt=":" />
                  <img src={d.OImage} alt=":" />
                </div>
                <div className="Auto_slider_second_flex">
                  <p className="slider_par1">{d.dParag1}</p>
                  <p className="slider_par2">{d.dValue}</p>
                  <p className="slider_par3">{d.dTime}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="Delay_Main_Flex_1">
        <div>
          <p className="delay_parag">Шаблоны</p>
        </div>
        <div className="Delay_main_Flex_Buttons">
          <button
            onClick={() => ButtonRef1.current.slickPrev()}
            className="Delay_Button1"
          >
            &lt;
          </button>
          <button
            onClick={() => ButtonRef1.current.slickNext()}
            className="Delay_Button2"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="Auto_Slider_Main_Back">
        <Slider ref={ButtonRef1} {...settings}>
          {data2.map((d) => {
            return (
              <div className="Auto_Slider_Children_Back1">
                <div className="Auto_slider_first_flex">
                  <img src={d.DImage} alt=":" />
                  <img src={d.OImage} alt=":" />
                </div>
                <div className="Auto_slider_second_flex">
                  <p className="slider_par1">{d.dParag1}</p>
                  <p className="slider_par2">{d.dValue1}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default AutoPay;
