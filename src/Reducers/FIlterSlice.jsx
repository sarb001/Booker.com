import { createSlice } from "@reduxjs/toolkit"; 
import room from '../data/rooms.json' ;


export const FilterSlice = createSlice({
    name: 'filter',
    initialState: {
        hotels : room,
        adults : 1,
        children : 1,
        // message : ""
    },
    reducers : {
        sortbyadults : (state,action) => {
            console.log('state 1- ' , JSON.stringify(state.hotels));
            console.log('state 2- ',action.payload);
            state.hotels = state.hotels?.filter((room) => room.adults === action.payload)
            console.log('state 3- ',JSON.stringify(state.hotels));

            // console.log('state 1- ' , state.hotels);
            // console.log('state 2- ',action.payload);
            // state.hotels = state.hotels?.filter((room) => room.adults === action.payload)
            // console.log('state 3- ',state.hotels);
        }
    }
})

export const { sortbyadults } = FilterSlice.actions;

export default FilterSlice.reducer;