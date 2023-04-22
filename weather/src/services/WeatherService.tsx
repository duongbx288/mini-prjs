import axios from "axios";
import {
  CURRENT_WEATHER_API,
  FORECAST_WEATHER_API,
  WEATHER_KEY,
} from "../api/WeatherAPI";
import { error } from "console";

class WeatherService {
  getCurrentWeather = (latitude: string, longitude: string) => {
    return axios
      .get(
        `${CURRENT_WEATHER_API}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&units=metric`
      )
      .catch((error: Error) => {
        console.log(error);
        return null;
      });
  };

  getForecastWeather = (latitude: string, longitude: string) => {
    return axios
      .get(
        `${FORECAST_WEATHER_API}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&units=metric`
      )
      .catch((error: Error) => {
        console.log(error);
        return null;
      });
  };
}

export default new WeatherService();
