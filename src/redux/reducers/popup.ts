import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popupSlice",
    initialState: {
        active: false,
        content: null
    },
    reducers: {
        togglePopup(state){
            state.active = !state.active
        },
        setPopupContent(state, action){
            state.content = action.payload
        }
    }
})

export const { togglePopup, setPopupContent } = popupSlice.actions

export default popupSlice.reducer;