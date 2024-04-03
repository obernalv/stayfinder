import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const hotelsxidSlice = createSlice({
    name: 'hotelsxid',
    initialState: {
        data: null,
        loading: false,
        error: null
    },

    reducers: {
        setHotelsxid:(state, action) => {
            //action.payload
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        
    }

})

export const { setHotelsxid, setLoading, setError } = hotelsxidSlice.actions;
export default hotelsxidSlice.reducer;

//Thunk
export const getHotelsxidThunk = (url) => (dispatch) => {

    dispatch(setLoading());

    axios.get(url)
    .then(res => {
        dispatch(setHotelsxid(res.data))
    })
    .catch(err => {
        dispatch(setError(err.message)); 
    })
}



