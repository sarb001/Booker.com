import { createSlice } from "@reduxjs/toolkit"; 
import room from '../data/rooms.json' ;


export const FilterSlice = createSlice({
    name: 'filter',
    initialState: {
        rooms : room,
        adults : 1,
        children : 1,
        // message : ""
    },
    reducers : {
        sortbyadults : (state,action) => {
            console.log('state 1- ' , JSON.stringify(state.rooms));
            console.log('state 2- ',action.payload);
            state.hotels = state.rooms?.filter((room) => room.adults === action.payload)
            console.log('state 3- ',JSON.stringify(state.rooms));
        }
    }
})

export const { sortbyadults } = FilterSlice.actions;

export default FilterSlice.reducer;