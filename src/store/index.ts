// note reducer
import {configureStore} from "@reduxjs/toolkit";
import {noteReducer} from "./notes/notes-slice.ts";

export const store = configureStore({
    reducer: {
        notes: noteReducer
    }
})