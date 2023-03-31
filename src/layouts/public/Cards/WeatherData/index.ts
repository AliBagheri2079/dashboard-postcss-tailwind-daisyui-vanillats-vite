import getWeatherDataByCityName from "@/services/weather/getWeatherDataByCityName";
import { WeatherUnitsEnum } from "@/global/enum/WeatherUnitsEnum";
import { degreesFormat, percentageFormat, speedFormat } from "@/utils/format";
import getCorrectWeatherIcon from "./getCorrectWeatherIcon";
import debounce from "@/utils/debounce";

const WeatherData = document.createElement("div");
WeatherData.className = "mockup-phone";
WeatherData.innerHTML = `
  <div class="camera"></div>
  <div class="display">
    <div class="phone-1 artboard artboard-demo">
      
    </div>
  </div>
`;

export const handleWeatherPageData = debounce((q: string[]) => {
	// console.log("debounce", q[0]);

	getWeatherDataByCityName({ q: q[0], units: WeatherUnitsEnum.METRIC })
		.then(({ data, status }) => {
			if (status === 200) {
				const weatherIcon = getCorrectWeatherIcon(data.weather[0].main);
				WeatherData.innerHTML = `
          <div class="camera"></div>
          <div class="display">
            <div class="phone-1 artboard artboard-demo bg-gradient-to-r from-green-400 to-blue-500 transition-colors">

              <div class="card w-full h-full mt-16 mb-4">
                <figure class="mb-4">
                  ${weatherIcon}
                </figure>

                <div class="card-body gap-6 px-4">
                  <h1 class="card-title justify-center text-7xl">
                    ${degreesFormat.format(data.main.temp)}
                  </h1>
                  <h2 class="card-title justify-center text-4xl capitalize">
                    ${data.name}
                  </h2>

                  <p class="mt-4 text-justify">
                    ${data.weather[0].description}
                  </p>

                  <div class="card-actions justify-between flex-col">
                    <div class="flex items-center gap-3 basis-full">
                      <div>
                        <i class="fa-solid fa-droplet text-4xl"></i>
                      </div>
                      <div>
                        <strong class="text-2xl">
                          ${percentageFormat.format(data.main.humidity)}
                        </strong>
                        <h5 class="capitalize">humidity</h5>
                      </div>
                    </div>

                    <div class="flex items-center gap-3 basis-full">
                      <div>
                        <i class="fa-solid fa-wind text-4xl"></i>
                      </div>
                      <div>
                        <strong class="text-2xl">
                          ${speedFormat.format(data.wind.speed)}
                        </strong>
                        <h5 class="capitalize">wind speed</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          `;
			}
		})
		.catch((error) => {
			console.error(error.message);
			WeatherData.innerHTML = `
            <div class="camera"></div>
            <div class="display">
              <div class="phone-1 artboard artboard-demo bg-red-200">

                <div class="alert alert-error shadow-lg">
                  <div>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <span>Error! Please Write Correct City Name.</span>
                  </div>
                </div>

              </div>
            </div>
          `;
		});
}, 1000);

export default WeatherData;
