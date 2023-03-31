import { type WeatherModeEnum } from "../enum/WeatherModeEnum";
import { type WeatherUnitsEnum } from "../enum/WeatherUnitsEnum";

export interface WeatherParamsType {
	q: string;
	mode?: WeatherModeEnum;
	units?: WeatherUnitsEnum;
	lang?: string;
}
