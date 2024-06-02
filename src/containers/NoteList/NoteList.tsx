import s from "./style.module.css";
import {TextCard} from "../../components/TextEditor/TextEditor.tsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteNote, deleteNoteRed, fetchAll} from "../../store/notes/notes-slice.ts";
import {useEffect, useState} from "react";

interface NoteListProps {
    noteList: [
        {
            id: number,
            title: string,
            subtitle?: string,
            content: string,
        }
    ];
}

export function NoteList({noteList}: NoteListProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleClick = (id: number) => {
    return navigate(`/notes/${id}`);
  }

    const handleClickTrash = (id: number) => {
        // @ts-ignore
        dispatch(deleteNote(id));
        dispatch(deleteNoteRed(id));
    }

  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
        <div className={s.card_container}>
            {
                noteList?.map((note) => (
                    <TextCard
                        key={note.id}
                        title={note.title}
                        subtitle={note?.subtitle}
                        content={note.content}
                        onClick={() => handleClick(note.id)}
                        onClickTrash={() => handleClickTrash(note.id)}
                    />
                ))
            }
        </div>
    </div>
  );
}
