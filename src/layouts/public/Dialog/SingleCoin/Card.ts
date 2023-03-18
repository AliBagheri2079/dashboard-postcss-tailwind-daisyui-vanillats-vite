/* eslint-disable @typescript-eslint/naming-convention */
import createChart from "@/components/Chart";
import getCoinData from "@/services/crypto/getCoinData";
import { currencyFormat, percentageFormat } from "@/utils/format";
import createCardStat from "./createCardStat";

const SingleCoinDialogCard = document.createElement("div");
SingleCoinDialogCard.setAttribute(
  "class",
  "dialog-card flex h-full flex-col overflow-y-scroll bg-base-100 py-6 shadow-xl"
);

const createSingleCoinChart = (data: number[]): void => {
  const CoinChartWrapper = document.createElement("figure");
  const CoinChart = document.createElement("canvas");
  CoinChart.id = "single-coin-chart";
  CoinChart.ariaLabel = "Single Coin Chart";
  CoinChartWrapper.appendChild(CoinChart);

  const chartData = {
    labels: Array.from(Array(8).keys()),
    datasets: [
      {
        // label,
        data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0.1,
        borderWidth: 1,
        radius: 0,
      },
    ],
  };
  const chartOption = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  createChart(CoinChart, "line", chartData, chartOption);
  SingleCoinDialogCard.insertAdjacentElement("afterbegin", CoinChartWrapper);
};

const getDialogContent = (url: string): void => {
  getCoinData(url)
    .then(data => {
      if (typeof data !== "string") {
        const {
          id,
          name,
          image,
          links,
          market_data,
          description,
          symbol,
          categories,
          developer_score,
        } = data;

        const firstStat = createCardStat({
          icon: "",
          title: "symbol",
          value: symbol,
          desc: `category: ${categories[0]}`,
          status: "text-info",
        });
        const secondStat = createCardStat({
          icon: "",
          title: "price",
          value: `
          ${currencyFormat.format(market_data.current_price.usd)}
          |
          ${percentageFormat.format(
            market_data.price_change_percentage_24h_in_currency.usd
          )}
          `,
          desc: `market cap: ${market_data.market_cap.usd}`,
          status:
            market_data.price_change_percentage_24h_in_currency.usd > 0
              ? "text-success"
              : market_data.price_change_percentage_24h_in_currency.usd < 0
              ? "text-error"
              : "",
        });
        const lastStat = createCardStat({
          icon: "",
          title: "total supply",
          value: market_data.total_supply.toString(),
          desc: `developer stars: ${developer_score}`,
          status: "text-warning",
        });

        SingleCoinDialogCard.innerHTML = `
          <div id=${id} class="card h-full">
            <div class="card-body">
              
              <div class="card-title grid grid-flow-col grid-cols-layout_2" aria-label="slide-over-title">
                <img src=${image?.small} alt=${name} loading="lazy" />
                <h1 class="text-5xl">${name}</h1>
                <a href=${links.homepage[0]} class="btn btn-ghost btn-link" target="_blank">
                  <span class="text-xl">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </a>
              </div>
  
              <div class="stats stats-vertical shadow">
                ${firstStat}
                ${secondStat}
                ${lastStat}
              </div>
  
              <p class="py-4 text-justify text-base">
                ${description.en}
              </p>
  
            </div>
          </div>
        `;

        createSingleCoinChart(market_data.sparkline_7d.price);
      }
    })
    .catch(error => {
      console.error(error);
    });
};

const handleDialogContent = (event: HashChangeEvent): void => {
  const isCoinDialogURL = event.newURL.includes("#coin-id");
  const url: string = location.hash.replace("#coin-id=", "");

  // console.log(url);
  if (isCoinDialogURL) getDialogContent(url);
};

addEventListener(
  "hashchange",
  (event: HashChangeEvent) => {
    handleDialogContent(event);
  },
  false
);

export default SingleCoinDialogCard;
