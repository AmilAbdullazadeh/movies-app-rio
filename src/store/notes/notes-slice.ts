import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:3001';

    // notes: [],
    // status: 'idle',
    // error: null
const notesInitialState = {
    notes: [],
    status: 'idle',
    error: null
}

const fetchAll = createAsyncThunk(
    'notes/fetchAll',
    async () => {
        const response = await axios.get(`${BASE_URL}/notes`)
        return response.data
    },
)

// const createNote

export const noteSlice = createSlice({
    name: 'notes',
    initialState: notesInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAll.pending, (state, action) => {
            state.status = 'loading'
        }),
        builder.addCase(fetchAll.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.notes = action.payload
        }),
        builder.addCase(fetchAll.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    },
})

// export actions and reducer
export { fetchAll }
export const noteReducer = noteSlice.reducer