import { type CoinsMarketParamsType } from "@/global/interface/CoinsMarketParams";
import { type CoinsMarketType } from "@/global/interface/CoinsMarket";
import { APICryptoInstance } from "./instance";

type CoinsMarketFCType = (
	params: CoinsMarketParamsType,
) => Promise<{ data: CoinsMarketType[]; status: number }> | never;

const getCoinsMarket: CoinsMarketFCType = async (params) => {
	try {
		const { data, status } = await APICryptoInstance({
			url: "/v3/coins/markets",
			params,
		});
		return { data, status };
	} catch {
		throw new Error(`Error Message from 'getCoinsMarket' API`);
	}
};

export default getCoinsMarket;
/*
try {
    // 👇️ fetch products from an API
    const { data, status } = await axios.get<GetProductsResponse>(
      'http://localhost:3002/products',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    console.log(`response status is: ${status}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`error message: ${error.message}`);
      return error.message;
    } else {
      console.log(`unexpected error: ${error}`);
      return 'An unexpected error occurred';
    }
  }
*/
