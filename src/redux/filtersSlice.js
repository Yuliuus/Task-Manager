import { createSlice } from '@reduxjs/toolkit';

// Початковий стан слайса
const initialState = {
    status: 'all',
};

const slice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload;
        }
    }
})

export const { setStatusFilter } = slice.actions;

export default slice.reducer;
