import createChart from "@/components/Chart";
import PieChartComponent from "./Component";

const MarketCapCard = PieChartComponent.cloneNode(true);
const MarketCapFigure = MarketCapCard.childNodes.item(0);

const MarketCapChart = document.createElement("canvas");
MarketCapChart.setAttribute("id", "market-chart");
MarketCapChart.setAttribute("aria-label", "Coin Market Cap");

export const handleMarketCapData = (data: number[]): void => {
  const HOVER_OFFSET = 8;
  const chartData = {
    datasets: [
      {
        data,
        label: "Coin Market Cap",
        backgroundColor: ["rgb(10, 255, 94)", "rgb(30, 128, 254)"],
        borderColor: "transparent",
        hoverOffset: HOVER_OFFSET,
      },
    ],
  };

  const chartOption = {
    responsive: true,
    plugins: {},
  };

  createChart(MarketCapChart, "pie", chartData, chartOption);
};
MarketCapFigure.appendChild(MarketCapChart);

export default MarketCapCard;
