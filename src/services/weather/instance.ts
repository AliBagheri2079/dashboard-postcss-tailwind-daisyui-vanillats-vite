import axios, { type AxiosInstance } from "axios";

export const weatherInstanceAPI: AxiosInstance = axios.create({
	method: "get",
	baseURL: "https://api.openweathermap.org",
	params: {
		//* Your unique API key
		appid: import.meta.env.VITE_WEATHER_API_KEY,
	},
});
