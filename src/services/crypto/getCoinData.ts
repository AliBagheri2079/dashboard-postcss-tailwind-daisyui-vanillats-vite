import axios from "axios";
import { type CoinDataParams } from "@/global/interface/CoinDataParams";
import { type CoinDataType } from "@/global/interface/CoinData";
import { APICryptoInstance } from "./instance";

type CoinDataFCType = (
	id: string,
	params?: CoinDataParams,
) => Promise<CoinDataType | string>;

const getCoinData: CoinDataFCType = async (id) => {
	try {
		const { data } = await APICryptoInstance<CoinDataType>({
			url: `/v3/coins/${id}`,
			params: {
				localization: false,
				tickers: false,
				market_data: true,
				community_data: false,
				developer_data: true,
				sparkline: true,
			},
		});
		return data;
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			console.log(`error message: ${error.message}`);
			return error.message;
		} else {
			throw new Error("An unexpected error occurred");
		}
	}
};

export default getCoinData;
