import {NoteForm} from "../../components/NoteForm/NoteForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createNote, deleteNote, updateNote} from "../../store/notes/notes-slice.ts";

export function Note(props) {
  const params = useParams();
  const notes = useSelector((state) => state.notes.notes);
  const [note, setData] = useState({});
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setData(notes.find((note) => note.id === params.id));
  }, [note, notes, params.id])

  const submit = (formValues: {
    title: string,
    content: string,
  }) => {
    const data = {
        id: note.id,
        title: formValues.title,
        content: formValues.content,
    }
    dispatch(updateNote(data)).then(() => {
      navigate('/');
    })
  }

  const onClickDelete = (id: number) => {
    dispatch(deleteNote(id)).then(() => {
        navigate('/');
    })
  }

  console.log(isEditable, 'isEditable');

  return (
    <>
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Update note" : note?.title}
          note={note}
          onClickDelete={() => onClickDelete(note.id)}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
    </>
  );
}
