import { createSlice } from '@reduxjs/toolkit';
export const Slice = createSlice({
    name: "count",
    initialState: {
        count: 0
    },
    reducers: {
        increase: (state) => {
            state.count += 1
        },
        decrease: (state) => {
            state.count -= 1
        }
    }
})
export const selectCount = (state) => state.count.count;
export const { increase, decrease } = Slice.actions;
export default Slice.reducer;