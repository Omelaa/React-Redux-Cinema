import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    isLoading: false
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({moviesType}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(moviesType);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.isLoading = false;
            })
            .addCase(getAll.rejected, (state) => {
                state.isLoading = false;
            })
    }
});


const {reducer: movieReducer, actions:{}} = movieSlice;

const movieActions = {
    getAll
};

export {movieReducer, movieActions};