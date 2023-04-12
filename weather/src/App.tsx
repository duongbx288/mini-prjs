import { useState, useEffect } from "react";
import Search from "./components/search/Search";
import './assets/App.css';
import Weather from "./components/weather/Weather";
import { CURRENT_WEATHER_API, FORECAST_WEATHER_API, WEATHER_KEY } from "./api/WeatherAPI";
import axios from "axios";

type SearchData {
  value: string;
  label: string;
}


function App() {

  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [searchData, setSearchData] = useState<SearchData>({value: '', label: ''});

  useEffect(()=>{
}, []);


  const handleOnSearchChange = (searchData: any) => {
    const [latitude, longitude] = searchData.value.split(" ");
    console.log(searchData);
    const currentWeatherFetch = axios.get(`${CURRENT_WEATHER_API}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}`).then((res) => {
      console.log(res);
    });
    const forecastWeatherFetch = axios.get(`${FORECAST_WEATHER_API}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}`).then((res) => {
      console.log(res);
    });

    // Promise.all([currentWeatherFetch, forecastWeatherFetch]).then((async (response) => {
    //   const weatherRes = await response[0];
    //   const forecastRes = await response[1];
    //   setCurrentWeather({weatherRes});
    //   setForecastWeather({forecastRes});
    // }));
  }


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <Weather />
    </div>
  );
}

export default App;
