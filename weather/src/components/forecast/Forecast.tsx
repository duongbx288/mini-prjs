import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = (data: any) => {
    const dayInWeek = new Date().getDay();
    const forecast = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded className="accordion">
                {data.data.list.splice(0, 7).map((item: any, idx: number) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                                <span className="day">{forecast[idx]}</span>
                                <span className="description">{item.weather[0].description}</span>
                                <span className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</span>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-detail-grid">
                            <div className="daily-detail-grid-item">
                                <span>Pressure: </span>
                                <span>{item.main.pressure} hPa</span>
                            </div>
                            <div className="daily-detail-grid-item">
                                <span>Humidity: </span>
                                <span>{item.main.humidity}%</span>
                            </div>
                            <div className="daily-detail-grid-item">
                                <span>Clouds: </span>
                                <span>{item.clouds.all}%</span>
                            </div>
                            <div className="daily-detail-grid-item">
                                <span>Wind: </span>
                                <span>{item.wind.speed} m/s</span>
                            </div>
                            <div className="daily-detail-grid-item">
                                <span>Sea level: </span>
                                <span>{item.main.sea_level} m</span>
                            </div>
                            <div className="daily-detail-grid-item">
                                <span>Feels like: </span>
                                <span>{Math.round(item.main.feels_like)} °C</span>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}
            </Accordion>
        </>
    )

}

export default Forecast;