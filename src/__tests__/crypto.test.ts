import getCoinsMarket from "../services/crypto/getCoinsMarket";
import getCoinData from "../services/crypto/getCoinData";
import { CoinsMarketCapOrderEnum } from "../global/enum/CoinsMarketCapOrder";

describe("Cryptos Api", () => {
	test("should return true data values", async () => {
		const { data } = await getCoinsMarket({
			vs_currency: "usd",
			order: CoinsMarketCapOrderEnum.Market_Cap_Desc,
			per_page: 2,
			sparkline: true,
			price_change_percentage: "24h",
		});

		expect(data[0]).toHaveProperty("id");
	});
});

describe("Crypto Api", () => {
	test("should return true data value", async () => {
		const data = await getCoinData("bitcoin");

		expect(data).toHaveProperty("id");
	});

	test("should return error message", async () => {
		getCoinData("bitco").catch((error) => {
			expect(error).toThrow();
		});
	});
});
