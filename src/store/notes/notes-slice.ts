import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:3001';

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

const deleteNote = createAsyncThunk(
    'notes/deleteNote',
    async (noteId: number) => {
        const response = await axios.delete(`${BASE_URL}/notes/${noteId}`)
        return response.data
    },
)

const createNote = createAsyncThunk(
    'notes/createNote',
    async (note: { title: string, content: string }) => {
        const response = await axios.post(`${BASE_URL}/notes`, note)
        return response.data
    },
)

const updateNote = createAsyncThunk(
    'notes/updateNote',
    async (note) => {
        const response = await axios.put(`${BASE_URL}/notes/${note.id}`, note)
        return response.data
    },
)

export const noteSlice = createSlice({
    name: 'notes',
    initialState: notesInitialState,
    reducers: {
        deleteNoteRed: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAll.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(fetchAll.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.notes = action.payload
            }),
            builder.addCase(fetchAll.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }),
            builder.addCase(deleteNote.pending, (state) => {
                state.status = 'loading'
            }),
            builder.addCase(deleteNote.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.notes = state.notes.filter(note => note.id !== action.payload)
            }),
            builder.addCase(deleteNote.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }),
            builder.addCase(createNote.pending, (state) => {
                state.status = 'loading'
            }),
            builder.addCase(createNote.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.notes.push(action.payload)
            }),
            builder.addCase(createNote.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})


// export actions and reducer
export {fetchAll, deleteNote, createNote, updateNote}
export const {deleteNoteRed} = noteSlice.actions
export const noteReducer = noteSlice.reducer