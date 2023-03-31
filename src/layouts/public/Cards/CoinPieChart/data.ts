import { handleCurrentPriceData } from "./CurrentPrice";
import { handleMarketCapData } from "./MarketCap";
import { CoinsMarketCapOrderEnum } from "@/global/enum/CoinsMarketCapOrder";
import getCoinsMarket from "@/services/crypto/getCoinsMarket";

getCoinsMarket({
	vs_currency: "usd",
	order: CoinsMarketCapOrderEnum.Market_Cap_Desc,
	per_page: 2,
	sparkline: true,
	price_change_percentage: "24h",
})
	.then(({ data }) => {
		const coinCurrentPriceData = data.map((data) => data.current_price);
		const coinMarketCapData = data.map((data) => data.market_cap);

		handleCurrentPriceData(coinCurrentPriceData);
		handleMarketCapData(coinMarketCapData);
	})
	.catch((error) => {
		return error;
		// console.error(error);
		// Todo: create placeholder
	});
