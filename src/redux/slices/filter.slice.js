import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    searchValue: ''
};


const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers:{
        setSearchValue(state, action){
            state.searchValue = action.payload;
        }
    }
});

const {reducer: filterReducer, actions:{setSearchValue}} = filterSlice;

const filterActions = {
    setSearchValue
};


export {filterReducer, filterActions};