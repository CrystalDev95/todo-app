import { createSlice } from "@reduxjs/toolkit"
import { Data } from '../Data'  

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {value: Data},
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id )
        },
        updateTask: (state, action) => {
            state.value.map((item) => {
                if (item.id === action.payload.id) {
                    item.task = action.payload.task;
                }
            })
        }
    }
})


export default taskSlice.reducer;
export const {addTask, deleteTask, updateTask} = taskSlice.actions