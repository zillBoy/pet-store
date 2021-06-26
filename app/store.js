import { configureStore } from '@reduxjs/toolkit'
import favouritePetReducer from '../features/favouritePetSlice'

const store = configureStore({
    reducer: {
        favouritePet: favouritePetReducer
    }
})

export default store