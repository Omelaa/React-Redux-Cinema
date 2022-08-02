import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {filterReducer, genreReducer, movieReducer} from "./slices";


const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
    filter: filterReducer
});


const store = configureStore({
    reducer: rootReducer
});


export {store};