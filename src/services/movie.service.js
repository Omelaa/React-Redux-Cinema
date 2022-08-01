import {urls} from "../constants";
import {axiosService} from "./axios.service";


const apiKey = 'api_key=becf59af707283b915e1027ddd5995ae';

const moviesCategories = {
    discover: `/discover${urls.movie}?${apiKey}`,
    topRated: `${urls.movie}/top_rated?${apiKey}`
}

const movieService = {
    getAll: (moviesType) => axiosService.get(moviesType)
};

// https://api.themoviedb.org/3/discover/movie?api_key=becf59af707283b915e1027ddd5995ae

export {movieService, moviesCategories};