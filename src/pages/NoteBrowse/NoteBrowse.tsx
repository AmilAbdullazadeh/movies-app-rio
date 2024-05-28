import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll} from "../../store/notes/notes-slice";
import {SearchBar} from "../../components/SearchBar/SearchBar.tsx";
import {NoteList} from "../../containers/NoteList/NoteList.tsx";

export function NoteBrowse(props) {
    // searchTerm
    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAll());
    }, []);

    // filterNotes action

    // handleSearch action

    console.log(notes);

    return (
        <>
            {
                notes.length === 0 ? (
                    <div className="d-flex justify-content-center">
                    <span>
                      You don't have any note, do you want to
                      <Link to="/notes/new">create one</Link>
                    </span>
                    </div>
                ) : (
                    <>
                        <div className="row justify-content-center mb-5">
                            <div className="col-sm-12 col-md-4">
                                {/*SearchBar*/}
                            </div>
                        </div>
                        { notes && <NoteList noteList={notes} /> }
                    </>
                )
            }
        </>
    );
}
