import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskSliceRefetch",
    initialState: {
        refetch: ()=>{}
    },
    reducers: {
        setTasksRefetch(state, action){
            console.log(action)
            console.log(action.payload)
            state.refetch = action.payload.refetch
        }
    }
})

export const {setTasksRefetch} = taskSlice.actions

export default taskSlice.reducer;