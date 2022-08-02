import {urls} from "../constants";
import {axiosService} from "./axios.service";


const apiKey = 'api_key=becf59af707283b915e1027ddd5995ae';

const moviesCategories = {
    discover: `/discover${urls.movie}?${apiKey}`,
    moviesFor: (moviesType) => `${urls.movie}/${moviesType}?${apiKey}`,
    search: (value) => `search${urls.movie}?${apiKey}&query=${value}`
}
// https://api.themoviedb.org/3/search/movie?api_key=becf59af707283b915e1027ddd5995ae&query=Jack+Reacher
// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

const movieService = {
    getAll: (moviesType) => axiosService.get(moviesType),
    search: (value) => axiosService.get(value)
};

// https://api.themoviedb.org/3/discover/movie?api_key=becf59af707283b915e1027ddd5995ae

export {movieService, moviesCategories};