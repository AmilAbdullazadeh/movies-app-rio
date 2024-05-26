import s from "./style.module.css";
import {TextCard} from "../../components/TextEditor/TextEditor.tsx";

export function NoteList({noteList}) {
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
        <div className={s.card_container}>
            {
                noteList?.map((note) => (
                    <p key={note.id} >{note.title}</p>
                    // <TextCard
                    //     key={note.id}
                    //     title={note.title}
                    //     subtitle={note.subtitle}
                    //     content={note.content}
                    // />
                ))
            }
        </div>
    </div>
  );
}
