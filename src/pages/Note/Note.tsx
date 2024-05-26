import {NoteForm} from "../../components/NoteForm/NoteForm.tsx";
import {useParams} from "react-router-dom";

export function Note(props) {
  const params = useParams();

  console.log(params);


  return (
    <>
        {/*<NoteForm*/}
        {/*  isEditable={isEditable}*/}
        {/*  title={isEditable ? "Update note" : note.title}*/}
        {/*  note={note}*/}
        {/*  onClickDelete={deleteNote_}*/}
        {/*  onClickEdit={() => setIsEditable(!isEditable)}*/}
        {/*  onSubmit={isEditable && submit}*/}
        {/*/>*/}
    </>
  );
}
