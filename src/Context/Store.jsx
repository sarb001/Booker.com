import { configureStore } from '@reduxjs/toolkit';
import FilterSearchReducer from '../Reducers/FIlterSlice';


const store = configureStore({
    reducer : {
        filter :  FilterSearchReducer,
    }
})

export default store;