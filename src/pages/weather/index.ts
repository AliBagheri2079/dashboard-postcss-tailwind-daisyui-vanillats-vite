import SearchForm from "@/components/Forms/Search/Form";
import WeatherData from "@/layouts/public/Cards/WeatherData";

const Weather = document.createElement("section");
Weather.className = "flex flex-col items-center h-full gap-4 mt-6";
Weather.append(SearchForm, WeatherData);

export default Weather;
