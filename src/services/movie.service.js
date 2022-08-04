import {urls} from "../constants";
import {axiosService} from "./axios.service";


const apiKey = 'api_key=becf59af707283b915e1027ddd5995ae';

const moviesCategories = {
    discover: `/discover${urls.movie}?${apiKey}`,
    moviesFor: (moviesType, genre, page) => `${urls.movie}/${moviesType}?${apiKey}&with_genres=${genre || null}&page=${page || 1}`,
    search: (value, page) => `search${urls.movie}?${apiKey}&query=${value}&page=${page}`
}

// https://api.themoviedb.org/3/movie/26/videos?api_key=becf59af707283b915e1027ddd5995ae&language=en-US
// https://api.themoviedb.org/3/search/movie?api_key=becf59af707283b915e1027ddd5995ae&query=Jack+Reacher
// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

const movieService = {
    getAll: (moviesType) => axiosService.get(moviesType),
    search: (value) => axiosService.get(value),
    getById: (id) => axiosService.get(`${urls.movie}/${id}?${apiKey}`),
    getVideo: (id) => axiosService.get(`${urls.movie}/${id}/videos?${apiKey}`),
};
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3/discover/movie?api_key=becf59af707283b915e1027ddd5995ae
// https://api.themoviedb.org/3/movie/26/videos?api_key=becf59af707283b915e1027ddd5995ae&language=en-US

export {movieService, moviesCategories};