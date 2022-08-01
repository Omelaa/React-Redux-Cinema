import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices";


const rootReducer = combineReducers({
    movie: movieReducer
});


const store = configureStore({
    reducer: rootReducer
});


export {store};