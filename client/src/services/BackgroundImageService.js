import { AppState } from "../AppState"
import { api } from "./AxiosService"

class BackgroundImageService{
  async getBackgroundImage() {
const res = await api.get('api/images')
AppState.backgroundImage = res.data
return
}

}

export const backgroundImageService = new BackgroundImageService()