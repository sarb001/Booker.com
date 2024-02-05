import { createSlice } from "@reduxjs/toolkit"; 
import room from '../data/rooms.json' ;


export const FilterSlice = createSlice({
    name: 'filter',
    initialState: {
        rooms : room,
        filterdata : [],
        adults : 1,
        children : 1,
        numberofrooms: 0,
    },
    reducers : {
        sortbyadults : (state,action) => {
            console.log('state 1- ' , JSON.stringify(state.rooms));
            console.log('state 2- ',action.payload);
            state.rooms = state.rooms?.filter((room) => room.adults === action.payload)
            console.log(' adult state - ',JSON.stringify(state.rooms));
        },
        sortbychildrens : (state,action) => {
            state.rooms  = state.rooms?.filter((room) => room.children === action.payload);
            state.filterdata = state.rooms;
            console.log(' children state 2 -',JSON.stringify(state.filterdata));
        },
        sortbyrooms : (state,action) => {
             state.rooms = state.rooms?.filter((data) => data.room_qty >= action.payload);
             state.filterdata = state.rooms;
             console.log('after rooms -',JSON.stringify(state.filterdata));
        }
    }
})

export const { sortbyadults ,sortbychildrens ,sortbyrooms } = FilterSlice.actions;

export default FilterSlice.reducer;