import { backgroundImageService } from "../services/BackgroundImageService";
import { weatherService } from "../services/WeatherService";
import Pop from "./Pop";

export const getHomePageURL = async() => {
    try {
        return backgroundImageService.getBackgroundImage()
      }
      catch (error){
        Pop.error(error);
      }
};

export const getWeatherInfo = async()=> {
  try {
return await weatherService.getWeather()
  }
  catch(error){
    Pop.error(error);
  }
};
