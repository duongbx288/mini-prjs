import "./weather.css";

// Data get from OpenWeatherAPI - check type there ?.
const Weather = (data: any) => {

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{`${data.data.name}, ${data.data.sys.country}`}</p>
          <p className="weather-description">
            {data.data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <div className="temperature">{`${Math.round(
          data.data.main.temp
        )}°C`}</div>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{`${Math.round(
              data.data.main.feels_like
            )}°C`}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{`${data.data.wind.speed} m/s`}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{`${data.data.main.humidity} %`}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{`${data.data.main.pressure} hPa`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
