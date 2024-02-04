import { createSlice } from "@reduxjs/toolkit"; 
import room from '../data/rooms.json' ;


export const FilterSlice = createSlice({
    name: 'filter',
    initialState: {
        rooms : room,
        adults : 1,
        children : 1,
    },
    reducers : {
        sortbyadults : (state,action) => {
            console.log('state 1- ' , JSON.stringify(state.rooms));
            console.log('state 2- ',action.payload);
            state.hotels = state.rooms?.filter((room) => room.adults === action.payload)
            console.log('state 3- ',JSON.stringify(state.rooms));
        },
        sortbychildrens : (state,action) => {
            state.hotels = state.rooms?.filter((room) => room.children === action.payload)
            console.log('state 3- ',JSON.stringify(state.rooms));
        }
    }
})

export const { sortbyadults ,sortbychildrens } = FilterSlice.actions;

export default FilterSlice.reducer;