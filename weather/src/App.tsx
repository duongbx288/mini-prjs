import { useState, useEffect } from "react";
import Search from "./components/search/Search";
import "./assets/App.css";
import Weather from "./components/weather/Weather";
import WeatherService from "./services/WeatherService";
import Forecast from "./components/forecast/Forecast";
import { CircularProgress } from "@mui/material";

export type SearchData = {
  value: string;
};

function App() {
  const [searchData, setSearchData] = useState<string>("");
  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [loadingWeather, setLoadingWeather] = useState<boolean>(false);
  const [loadingForecast, setLoadingForecast] = useState<boolean>(false);

  useEffect(() => {
    if (searchData && searchData.length > 0) {
      setLoadingWeather(true);
      setLoadingForecast(true);
      const [latitude, longitude] = searchData.split(" ");
      WeatherService.getCurrentWeather(latitude, longitude).then((res) => {
        if (res && res.data) setCurrentWeather(res.data);
        setLoadingWeather(false);
      });
      WeatherService.getForecastWeather(latitude, longitude).then((res) => {
        if (res && res.data) setForecastWeather(res.data);
        setLoadingForecast(false);
      });
    }
  }, [searchData]);

  return (
    <div className="container">
      <Search onSearchChange={setSearchData} />
      {!loadingWeather ? (
        <>{currentWeather != null && <Weather data={currentWeather} />}</>
      ) : (
        <div className="loading-weather">
          <CircularProgress className="loading" />
        </div>
      )}
      {!loadingForecast ? (
        <> {forecastWeather != null && <Forecast data={forecastWeather} />}</>
      ) : (
        <div className="loading-forecast">
          <CircularProgress className="loading" />
        </div>
      )}
    </div>
  );
}

export default App;
