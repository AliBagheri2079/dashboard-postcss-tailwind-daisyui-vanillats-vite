const getCorrectWeatherIcon = (status: string): string => {
	switch (status) {
		case "Clouds":
			return `<i class="text-8xl fa-solid fa-cloud"></i>`;
		case "Clear":
			return `<i class="text-8xl fa-solid fa-cloud-sun"></i>`;
		case "Rain":
			return `<i class="text-8xl fa-solid fa-cloud-sun-rain"></i>`;
		case "Drizzle":
			return `<i class="text-8xl fa-solid fa-droplet"></i>`;
		case "Mist":
			return `<i class="text-8xl fa-solid fa-cloud-moon"></i>`;
		case "Snow":
			return `<i class="text-8xl fa-solid fa-snowflake"></i>`;
		default:
			return `<i class="text-8xl fa-solid fa-temperature-three-quarters"></i>`;
	}
};

export default getCorrectWeatherIcon;
