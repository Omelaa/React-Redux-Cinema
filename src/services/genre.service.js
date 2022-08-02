import {axiosService} from "./axios.service";
import {urls} from "../constants";


const apiKey = 'api_key=becf59af707283b915e1027ddd5995ae';

const genreService = {
    getAll: () => axiosService.get(`${urls.genre}${urls.movie}/list?${apiKey}`)
};


export {genreService};