import { configureStore } from '@reduxjs/toolkit'
import hotels from './slices/hotels.slice'
import hotelsxid from './slices/hotelsxid.slice'

export default configureStore({
    reducer:{
        hotels,
        hotelsxid
    }
})