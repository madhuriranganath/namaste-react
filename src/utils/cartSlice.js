import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers:{
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItems: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItems, removeItems} = cartSlice.actions;
export default cartSlice.reducer;