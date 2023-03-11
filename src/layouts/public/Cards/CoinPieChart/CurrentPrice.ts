import createChart from "@/components/Chart";
import PieChartComponent from "./Component";

const CurrentPriceCard = PieChartComponent.cloneNode(true);
const CurrentPriceFigure = CurrentPriceCard.childNodes.item(0);

const CurrentPriceChart = document.createElement("canvas");
CurrentPriceChart.setAttribute("id", "price-chart");
CurrentPriceChart.setAttribute("aria-label", "Coin Current Price");

export const handleCurrentPriceData = (data: number[]): void => {
  const HOVER_OFFSET = 8;
  const chartData = {
    datasets: [
      {
        data,
        label: "Coin Current Price",
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

  createChart(CurrentPriceChart, "pie", chartData, chartOption);
};
CurrentPriceFigure.appendChild(CurrentPriceChart);

export default CurrentPriceCard;
