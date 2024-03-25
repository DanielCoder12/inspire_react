export class WeatherModel{
constructor(data){
    this.tempKelvin = data.main.temp
    this.sky = data.weather[0].main
    this.iconLink = data.weather.icon
    this.icon = data.weather[0].icon
    this.tempState = true
    this.tempFahrenheit = ((data.main.temp - 273.15) * 9 / 5 + 32).toLocaleString().substring(0,2)
    this.tempCelsius = ((data.main.temp - 273.15)).toLocaleString().substring(0,2)
}


}



