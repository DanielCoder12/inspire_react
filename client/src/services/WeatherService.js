import { AppState } from "../AppState"
import { WeatherModel } from "../models/WeatherModel"
import { api } from "./AxiosService"

class WeatherService{
  async getWeather() {
const res = await api.get('api/weather')
console.log(res.data)
AppState.weather = new WeatherModel(res.data)
return
  }

}

export const weatherService = new WeatherService()