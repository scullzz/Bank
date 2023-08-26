import React from "react";
import Header from "./header/Header";
import "./index.css";
import Search from "./search/Search";
import Pays from "./pays/Pays";
import AutoPay from "./autoPay/AutoPay";
import Analiz from "./analiz/Analiz";
import Lattest from "./lattest/Lattest";
import Footer from "./footer/Footer";
const MainPage = () => {
  return (
    <div className="MainPageLimit">
      <Header></Header>
      <Search></Search>
      <Pays></Pays>
      <AutoPay></AutoPay>
      <Analiz></Analiz>
      <Lattest></Lattest>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
