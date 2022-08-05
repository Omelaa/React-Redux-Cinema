import {urls} from "../constants";
import {axiosService} from "./axios.service";


const apiKey = 'api_key=becf59af707283b915e1027ddd5995ae';

const moviesCategories = {
    discover: `/discover${urls.movie}?${apiKey}`,
    moviesFor: (moviesType, genre, page) => `${urls.movie}/${moviesType}?${apiKey}&with_genres=${genre || null}&page=${page || 1}`,
    search: (value, page) => `search${urls.movie}?${apiKey}&query=${value}&page=${page}`
}

const movieService = {
    getAll: (moviesType) => axiosService.get(moviesType),
    search: (value) => axiosService.get(value),
    getById: (id) => axiosService.get(`${urls.movie}/${id}?${apiKey}`),
    getVideo: (id) => axiosService.get(`${urls.movie}/${id}/videos?${apiKey}`),
};

export {movieService, moviesCategories};