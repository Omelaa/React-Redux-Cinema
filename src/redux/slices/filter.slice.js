import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    searchValue: '',
    totalPages: 0,
    currentPage: 1,
    currentGenre: 0
};


const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setGenre(state, action) {
            state.currentGenre = action.payload;
        }
    }
});

const {reducer: filterReducer, actions: {setSearchValue, setTotalPages, setCurrentPage, setGenre}} = filterSlice;

const filterActions = {
    setSearchValue,
    setTotalPages,
    setCurrentPage,
    setGenre
};


export {filterReducer, filterActions};