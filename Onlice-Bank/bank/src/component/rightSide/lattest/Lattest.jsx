import React from "react";
import base from "./image/base.svg";
import beeline from "./image/beeline.png";
import uztel from "./image/uztel.svg";
import "./index.css";
const Lattest = () => {
  const data = [
    {
      dImage: beeline,
      what: "Beeline",
      type: "Мобильная связь",
      value: "-90 000 UZS",
      time: "11:23",
    },
    {
      dImage: base,
      what: "Majidov Azamat",
      type: "Перевод",
      value: "-500 000 UZS",
      time: "10:11",
    },
    {
      dImage: base,
      what: "Iminoxunov Nuruddin",
      type: "Перевод",
      value: "+500 000 UZS",
      time: "01:23",
    },
    {
      dImage: base,
      what: "Islomov Sardor",
      type: "Перевод",
      value: "+500 000 UZS",
      time: "01:20",
    },
  ];
  const data1 = [
    {
      dImage: uztel,
      what: "UzMobile",
      type: "Мобильная связь",
      value: "-90 000 UZS",
      time: "11:23",
    },
  ];
  return (
    <div className="Main_">
      <div className="first_lattest_flex">
        <p className="lat_par1">Последние операции</p>
      </div>
      <p className="lat_par2">Сегодня</p>
      <div className="Main_Flex_With_Border">
        {data.map((d) => {
          return (
            <div className="ex_">
              <div className="liittle_Flex_border">
                <div className="Main_Child_Flex1">
                  <div>
                    <img src={d.dImage} alt=":(" />
                  </div>
                  <div className="flex2">
                    <p className="lat_par3">{d.what}</p>
                    <div className="flex1">
                      <div className="Dot"></div>
                      <div>
                        <p className="lat_par4">{d.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Main_Child_Flex2">
                  <p className="lat_par5">{d.value}</p>
                  <p className="lat_par6">{d.time}</p>
                </div>
              </div>
              <div className="border"></div>
            </div>
          );
        })}
      </div>
      <p className="lat_par2">Вчера</p>
      <div className="Later_Main_Flex">
        {data1.map((d) => {
          return (
            <div className="ex_">
              <div>
                <div className="liittle_Flex_border">
                  <div className="Main_Child_Flex1">
                    <div>
                      <img src={d.dImage} alt=":(" />
                    </div>
                    <div className="flex2">
                      <p className="lat_par3">{d.what}</p>
                      <div className="flex1">
                        <div className="Dot"></div>
                        <div>
                          <p className="lat_par4">{d.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Main_Child_Flex2">
                    <p className="lat_par5">{d.value}</p>
                    <p className="lat_par6">{d.time}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="button_main">
        <button className="style_but">Посмотреть всё</button>
      </div>
    </div>
  );
};

export default Lattest;
