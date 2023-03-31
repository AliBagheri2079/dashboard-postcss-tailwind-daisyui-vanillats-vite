/* eslint-disable @typescript-eslint/naming-convention */
import getCoinsMarket from "@/services/crypto/getCoinsMarket";
import { CoinsMarketCapOrderEnum } from "@/global/enum/CoinsMarketCapOrder";
import CoinDataBodyPlaceholder from "./CoinDataBodyPlaceholder";
import createCoinDataBodyContent from "./CoinDataBodyContent";

const CoinDataBody: string = CoinDataBodyPlaceholder;

getCoinsMarket({
	vs_currency: "usd",
	order: CoinsMarketCapOrderEnum.Market_Cap_Desc,
	per_page: 100,
	sparkline: true,
	price_change_percentage: "24h",
})
	.then(({ data, status }) => {
		const dataBodyElm = document.querySelector(
			"#coin-data-body",
		) as HTMLTableSectionElement;

		if (status === 200) {
			dataBodyElm.innerHTML = "";
			data.map(
				({
					current_price,
					id,
					image,
					last_updated,
					market_cap,
					market_cap_rank,
					name,
					symbol,
					price_change_percentage_24h,
				}) =>
					(dataBodyElm.innerHTML += createCoinDataBodyContent({
						current_price,
						id,
						image,
						last_updated,
						market_cap,
						market_cap_rank,
						name,
						symbol,
						price_change_percentage_24h,
					})),
			);
		}
	})
	.catch((error) => {
		console.error(error);
		throw new Error("Error from coin data body component");
	});

export default CoinDataBody;
