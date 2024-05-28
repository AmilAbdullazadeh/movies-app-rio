import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {StrictMode} from "react";
import "./index.css";
import {store} from "./store";
import {NoteBrowse} from "./pages/NoteBrowse/NoteBrowse.tsx";
import {NoteCreate} from "./pages/NoteCreate/NoteCreate.tsx";
import {Note} from "./pages/Note/Note.tsx";
import {PageNotFound} from "./pages/PageNotFound/PageNotFound.tsx";
import {Provider} from "react-redux";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<App/>}>
                        <Route path="/" element={<NoteBrowse/>}/>
                        <Route path="/notes/new" element={<NoteCreate/>}/>
                        <Route path="/notes/:id" element={<Note/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
)
