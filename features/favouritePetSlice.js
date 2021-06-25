import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favouritePet: []
}

const favouritePetSlice = createSlice({
    name: 'favouritePet',
    initialState,
    reducers: {
        addFavouritePet: (state, action) => {
            state.favouritePet.push(action.payload) 
        },
        removeFavouritePet: (state, action) => {
            state.favouritePet.filter(pet => pet.id !== action.payload)
        }
    }
});

export const { addFavouritePet, removeFavouritePet } = favouritePetSlice.actions
export default favouritePetSlice.reducer