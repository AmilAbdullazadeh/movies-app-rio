import {NoteForm} from "../../components/NoteForm/NoteForm.tsx";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createNote} from "../../store/notes/notes-slice.ts";

interface ISubmitData {
    title: string;
    content: string;
}

export function NoteCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (formValues: ISubmitData) => {
        dispatch(createNote(formValues)).then(() => {
            navigate('/');
        })
    }

  return (
    <>
      <NoteForm
        title="New note"
        onSubmit={submit}
      />
    </>
  );
}