import React from "react";
import calendar from "./image/calendar.svg";
import select from "./image/selectUnder.svg";
import Group from "./image/Group.svg";
import add from "./image/add.svg";
import group2 from "./image/group2.svg";
import Chart from "react-apexcharts";
import "./index.css";
const Analiz = () => {
  return (
    <div className="Main">
      <div className="Analiz_Main_First_Flex">
        <div className="a_child_first_flex1">
          <p className="a_first_par1">Аналитика расходов</p>
        </div>
        <div className="a_child_first_flex2">
          <img src={calendar} alt=":(" />
          <p className="a_first_par2">1 февраля 2021 - 25 февраля 2021</p>
          <img src={select} alt=":(" />
        </div>
      </div>

      <div className="Anailz_Second_Main_Flex">
        <div className="line1">
          <div className="a_second_flex_child1">
            <img src={Group} alt=":(" />
            <p className="a_second_par1">В выбранном периоде:</p>
          </div>
          <div className="a_second_flex_child2">
            <p className="a_second_par2">Зачисления</p>
            <p className="a_second_par3">+25 000 230.00 UZS</p>
          </div>
          <div className="a_second_flex_child3">
            <p className="a_second_par4">Списания</p>
            <p className="a_second_par5">-15 230 000.00 UZS</p>
          </div>
          <div className="a_second_flex_child4">
            <button className="a_second_button1">
              <img src={group2} alt=":(" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="chart_Headache">
          <Chart
            type="donut"
            width={1110}
            height={600}
            series={[
              4219000.0, 119000.0, 819000.0, 219000.0, 3219000.0, 1219000.0,
              4219000.0, 119000.0, 219000.0,
            ]}
            options={{
              labels: [
                "Финансы",
                "Супермаркеты",
                "Мобильная свзяь",
                "Кафе и рестораны",
                "Коммунальные услуги",
                "Товары для дома",
                "Развлечения",
                "Транспорт",
                "Прочее",
              ],
              plotOptions: {
                pie: {
                  offsetY: -90,
                  customScale: 0.7,
                  donut: {
                    size: "85%",
                    labels: {
                      show: true,
                      value: {
                        fontSize: 24,
                        fontWeight: 500,
                        style: { lineHeight: 22 },
                      },
                      total: {
                        show: true,

                        fontSize: 30,
                        color: "#2B2D33",
                        fontWeight: 700,
                      },
                    },
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
              legend: {
                offsetY: -10,
                position: "right",
                fontSize: 16,
                labels: {
                  colors: "#808185",
                },
                markers: {
                  width: "8px",
                  height: "8px",
                  offsetX: -16,
                },
                itemMargin: {
                  horizontal: 16,
                  vertical: 22,
                },
              },
            }}
          ></Chart>
        </div>
        <div className="chart_add_somethig">
          <img src={add} alt=":(" />
          <p className="chart_parag">Добавить категорию</p>
        </div>
      </div>
    </div>
  );
};

export default Analiz;
