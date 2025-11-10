import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addrequest: (state, action) => action.payload,
        removeRequest: (state, action) => {
            const newArray = state.filter(r => r._id !== action.payload)
            return newArray
        }
    }
})

export const { addrequest, removeRequest } = requestSlice.actions;

export default requestSlice.reducer;