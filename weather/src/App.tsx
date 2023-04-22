import { useState, useEffect } from "react";
import Search from "./components/search/Search";
import "./assets/App.css";
import Weather from "./components/weather/Weather";
import WeatherService from "./services/WeatherService";
import Forecast from "./components/forecast/Forecast";

export type SearchData = {
  value: string;
};

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [searchData, setSearchData] = useState<string>("");

  useEffect(() => {
    if (searchData && searchData.length > 0) {
      const [latitude, longitude] = searchData.split(" ");
      WeatherService.getCurrentWeather(latitude, longitude).then((res) => {
        if (res && res.data) setCurrentWeather(res.data);
      });
      WeatherService.getForecastWeather(latitude, longitude).then((res) => {
        if (res && res.data) setForecastWeather(res.data);
      });
    }
  }, [searchData]);

  return (
    <div className="container">
      <Search onSearchChange={setSearchData} />
      {currentWeather != null && <Weather data={currentWeather} />}
      {forecastWeather != null && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
