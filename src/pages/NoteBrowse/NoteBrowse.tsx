import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll} from "../../store/notes/notes-slice";
import {SearchBar} from "../../components/SearchBar/SearchBar.tsx";
import {NoteList} from "../../containers/NoteList/NoteList.tsx";

interface INoteBrowse {
    id: number,
    title: string,
    subtitle?: string,
    content: string,
}

export function NoteBrowse(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch]);

    const filterNotes = notes.filter((note: INoteBrowse) => {
        const title = note.title.toLowerCase().includes(searchTerm.toLowerCase());
        const content = note.content.toLowerCase().includes(searchTerm.toLowerCase());

        return title || content;
    })

    const handleSearch = (text: string) => {
        setSearchTerm(text);
    }

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
                                <SearchBar onTextChange={handleSearch} placeholder='Search ...' />
                            </div>
                        </div>
                        { notes && <NoteList noteList={filterNotes} /> }
                    </>
                )
            }
        </>
    );
}
