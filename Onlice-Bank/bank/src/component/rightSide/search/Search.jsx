import search from "./image/search.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card from "./image/card.png";
import left from "./image/left.svg";
import right from "./image/right.svg";
import React from "react";
import { useRef } from "react";
import "./index.css";
const Search = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      par1: "Карта VISA",
      par2: "Верный спутник в путешествии!",
      image: card,
    },
    {
      par1: "Карта VISA",
      par2: "Верный спутник в путешествии!",
      image: card,
    },
  ];
  return (
    <div className="Search_Main">
      <div className="Search_main_flex">
        <div>
          <img src={search} alt="" />
        </div>
        <div>
          <form>
            <input
              className="input_search"
              type="text"
              placeholder="Поиск по провайдерам, операциям, счетам, контактам, платежам услугам банка и т.д"
            />
          </form>
        </div>
      </div>

      <div className="Visa_Slick_Slider">
        <Slider ref={sliderRef} {...settings}>
          {data.map((d) => {
            return (
              <div className="box">
                <div className="_main_flex_visa">
                  <div className="everything_main_flex">
                    <p className="vasa_parag1">{d.par1}</p>
                    <p className="visa_parag2">{d.par2}</p>
                    <div className="buttons_arrows_flex">
                      <button
                        onClick={() => sliderRef.current.slickPrev()}
                        className="button1"
                      >
                        <img className="simb" src={left} alt=":(" />
                      </button>
                      <button
                        onClick={() => sliderRef.current.slickNext()}
                        className="button2"
                      >
                        <img className="simb" src={right} alt=":(" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <img src={d.image} alt=":(" />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Search;
