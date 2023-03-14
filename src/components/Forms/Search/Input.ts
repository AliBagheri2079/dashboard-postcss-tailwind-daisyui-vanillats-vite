import { handleWeatherPageData } from "@/layouts/public/Cards/WeatherData";

const Input = document.createElement("input");
Input.setAttribute("type", "search");
Input.setAttribute("placeholder", "Search...");
Input.setAttribute(
  "class",
  "input-bordered input w-80 max-w-sm !rounded-l-full"
);
Input.setAttribute("name", "search-input");
Input.setAttribute("autofocus", "true");

Input.addEventListener(
  "input",
  (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    handleWeatherPageData(value);
  },
  false
);

export default Input;
