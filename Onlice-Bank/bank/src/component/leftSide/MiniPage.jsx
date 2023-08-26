import React from "react";
import "./index.css";
import Face from "./image/Face.png";
import eye from "./image/eye.svg";
import Sel_Hide from "./image/select-hide.svg";
import Notification from "./image/notification.svg";
import bg2 from "./image/bg-2.svg";
import bg4 from "./image/bg-4.svg";
import wallet from "./image/wallet-2.svg";
import chart from "./image/chart.svg";
import rub from "./image/RUB.svg";
import usd from "./image/USD.svg";
import uzs from "./image/UZS.svg";
import eur from "./image/EUR.svg";
import info from "./image/info-ring.svg";
import car_credit from "./image/car-credit.svg";
import car_hand from "./image/car-hand.svg";
import offer from "./image/offer.svg";
//dont forget to import useState useEffect
const MiniPage = () => {
  // Api that associate with cards and wallets
  // const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   fetch("your api")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCards(result);
  //     });
  // }, []);
  const Cards = [
    {
      image: bg2,
      type_card: "Зарплатная карта",
      value: "55 800 120.24 UZS",
    },
    {
      image: bg4,
      type_card: "Тестовая карта",
      value: "0.00 UZS",
    },
    {
      image: wallet,
      type_card: "На новую машину **2112",
      value: "900.00 UZS",
    },
    {
      image: wallet,
      type_card: "Мой кошелек **2122",
      value: "120 000.00 UZS",
    },
  ];

  // Api that associate with accounts and deposits
  // const [account, setAccount] = useState([]);
  // useEffect(() => {
  //   fetch("your api")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setAccount(result);
  //     });
  // }, []);
  const Accouts = [
    {
      currency: uzs,
      type: "Суммовой счёт",
      value: "120 000 000.00 UZS",
    },
    {
      currency: usd,
      type: "Долларовый счёт",
      value: "5 230.00 $",
    },
    {
      currency: rub,
      type: "Рублёвый счёт",
      value: "921.00 ₽",
    },
    {
      currency: eur,
      type: "Счёт в евро",
      value: "0.00 €",
    },
    {
      currency: chart,
      type: "Вклад “Стимул онлайн”",
      value: "58 888 888.00 UZS",
    },
  ];

  // Api that associate with credits
  // const [credit, setCredit] = useState([]);
  // useEffect(() => {
  //   fetch("your api")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCredit(result);
  //     });
  // }, []);
  const Credit = [
    {
      imageType: car_credit,
      forWhat: "Автокредит",
      balance: "89 230 400.00 UZS",
    },
    {
      imageType: car_hand,
      forWhat: "Овердрафт",
      balance: "1 230 400.00 UZS",
    },
  ];

  // Api that associate with bonuses
  // const [bonus, setBonus] = useState([]);
  // useEffect(() => {
  //   fetch("your api")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setBonus(result);
  //     });
  // }, []);
  const Bonuses = [
    {
      image: offer,
      points: 800,
    },
  ];
  return (
    <div className="Mini_Main">
      <div className="Mini_Limit">
        <div className="main">
          <div className="name_flex">
            <img src={Face} alt=":(" />
            <p className="name_flex_par">Нуруддин Иминохунов</p>
            <img src={Notification} alt=":(" />
          </div>

          <div className="card_background">
            <div>
              <p className="general_balance">Общий баланс</p>
            </div>
            <div className="money_eye_flex">
              <p className="money_p">58 000 120.24 UZS</p>
              <img src={eye} alt=":(" />
            </div>
          </div>

          <div className="All_TypeOf_Cards">
            <div className="cards_wallet">
              <p className="cards_p">Карты и кошельки</p>
              <img src={Sel_Hide} alt=":(" />
            </div>
            <div className="hidden_all_cards_wallet">
              {/* in here you should change this to api object(Cards and Wallet) */}
              {Cards.map((card) => {
                return (
                  <div className="hidden_main_flex">
                    <div className="hidden_child1">
                      <img src={card.image} alt=":(" />
                    </div>
                    <div className="hidden_child2">
                      <p className="hidden_par1">{card.type_card}</p>
                      <p className="hidden_par2">{card.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="accounts_deposits">
              <div className="account_mini_flex">
                <p className="cards_p">Счета и вклады</p>
                <img src={Sel_Hide} alt=":(" />
              </div>
              <div className="hidden_account_deposits">
                {/* in here you should change this to api object(Account and Deposits)*/}
                {Accouts.map((acc) => {
                  return (
                    <div className="account_hidden_main_flex2">
                      <div className="account-hidden_child2">
                        <img src={acc.currency} alt=":(" />
                      </div>
                      <div className="account_hidden_child2">
                        <p className="account_hidden_par1">{acc.type}</p>
                        <p className="account_hidden_par2">{acc.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="InfoZone">
              <img src={info} alt=":(" />
              <p className="infoZone_text">Будет выплачено 679 000 к 29 фев</p>
            </div>

            <div className="Creadits">
              <div className="credit_flex_main">
                <p className="credit_main_par">Кредиты</p>
                <img src={Sel_Hide} alt=":(" />
              </div>
              <div className="hidden_creadis_cards">
                {/* in here you should change this to api object(Credits Cards)*/}
                {Credit.map((cred) => {
                  return (
                    <div className="credit_child_flex_mini">
                      <div>
                        <img src={cred.imageType} alt=":(" />
                      </div>
                      <div className="credit_child_flex_mini2">
                        <p className="credit_par1">{cred.forWhat}</p>
                        <p className="credit_par2">{cred.balance}</p>
                        <p className="credit_par3">Остаток долга</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="Bonus">
              <div className="bonus_main_flex">
                <p className="bonus_main_par">Бонусы</p>
                <img src={Sel_Hide} alt=":(" />
              </div>
              <div>
                {/* in here you should change this to api object(Bonus)*/}
                {Bonuses.map((bon) => {
                  return (
                    <div className="bonus_child_flex_main">
                      <div>
                        <img src={bon.image} alt=":(" />
                      </div>
                      <div className="bonus_child_flex_border">
                        <p className="child_flex_par1">Доступно баллов:</p>
                        <p className="child_flex_par2">{bon.points}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniPage;
