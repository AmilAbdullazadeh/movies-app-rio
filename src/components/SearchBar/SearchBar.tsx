import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

interface SearchBarProps {
  onTextChange: (text: string) => void;
  placeholder: string;
}

export function SearchBar({ onTextChange, placeholder }: SearchBarProps) {
  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <input
        type="text"
        className={s.input}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
