import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    moviesTopRate: [],
    moviesNowPlaying: [],
    moviesUpcoming: [],
    isLoading: false
};

const getAllTopRate = createAsyncThunk(
    'movieSlice/getAllTopRate',
    async ({moviesType}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(moviesType);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getAllNowPlaying = createAsyncThunk(
    'movieSlice/getAllNowPlaying',
    async ({moviesType}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(moviesType);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getAllUpcoming = createAsyncThunk(
    'movieSlice/getAllUpcoming',
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
            .addCase(getAllTopRate.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTopRate.fulfilled, (state, action) => {
                state.moviesTopRate = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllTopRate.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getAllNowPlaying.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllNowPlaying.fulfilled, (state, action) => {
                state.moviesNowPlaying = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllNowPlaying.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getAllUpcoming.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllUpcoming.fulfilled, (state, action) => {
                state.moviesUpcoming = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllUpcoming.rejected, (state) => {
                state.isLoading = false;
            })
    }
});


const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAllNowPlaying,
    getAllTopRate,
    getAllUpcoming
};

export {movieReducer, movieActions};