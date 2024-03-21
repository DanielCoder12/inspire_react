import { AppState } from "../AppState"
import { api } from "./AxiosService"

class WeatherService{
  async getWeather() {
const res = await api.get('api/weather')
console.log(res.data)
AppState.weather = res.data
return
  }

}

export const weatherService = new WeatherService()