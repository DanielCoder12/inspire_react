import { useEffect, useState } from "react"
import { getWeatherInfo } from "../utils/homepage.utils";
import { AppState } from "../AppState";


export function Weather(){

    const [weather, setWeather] = useState('');
    const [weatherCondition, setWeatherCondition] = useState('');
    useEffect(()=> {
        const fetchWeather = async() => {
            await getWeatherInfo()
            setWeather( Math.trunc((AppState.weather.main.temp -= 273.15) * 1.8 + 32))
            setWeatherCondition(AppState.weather.weather[0].description)
        };
fetchWeather()
    },[]);

    return(
        <>
        <button>
            <div>
        {weather}
            </div>
        {weatherCondition}
        <div>
        </div>
        </button>
    </>
    )
}