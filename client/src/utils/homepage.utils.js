import { backgroundImageService } from "../services/BackgroundImageService";
import Pop from "./Pop";

export const getHomePageURL = async() => {
    try {
        return backgroundImageService.getBackgroundImage()
      }
      catch (error){
        Pop.error(error);
      }
};
