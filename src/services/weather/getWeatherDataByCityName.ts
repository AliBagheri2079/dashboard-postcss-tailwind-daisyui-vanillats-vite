import { weatherInstanceAPI } from "./instance";
import { type WeatherParamsType } from "@/global/interface/WeatherParams";
import { type WeatherDataType } from "@/global/interface/WeatherData";

type WeatherDataByCityNameFCType = (
	params: WeatherParamsType,
) => Promise<{ data: WeatherDataType; status: number }> | never;

const getWeatherDataByCityName: WeatherDataByCityNameFCType = async (
	params,
) => {
	try {
		const { data, status } = await weatherInstanceAPI({
			url: "/data/2.5/weather",
			params,
		});
		return { data, status };
	} catch {
		throw new Error(`Error Message from 'getWeatherDataByCityName' API`);
	}
};

export default getWeatherDataByCityName;
