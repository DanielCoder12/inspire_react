import { useEffect, useState } from "react"
import { getWeatherInfo } from "../utils/homepage.utils";
import { AppState } from "../AppState";
import { WeatherModel } from "../models/WeatherModel";


export function Weather(){

    const [weather, setWeather] = useState('');
    useEffect(()=> {
        const fetchWeather = async() => {
            await getWeatherInfo()
            setWeather( AppState.weather.tempFahrenheit + '°F')
        };
fetchWeather()
    },[]);

    return(
        <>
            <div>
                <button onClick={()=> weather == AppState.weather.tempFahrenheit +'°F' ? setWeather(AppState.weather.tempCelsius + '°C') : setWeather(AppState.weather.tempFahrenheit + '°F')} className="btn btn-light text-white background-blur p-1 d-flex align-items-center">
                    <div className="px-2e">
                    <p>{weather}</p>
                    <p>{AppState.weather.sky}</p>
                    </div>
                </button>
            </div>
    
    </>
    )
}