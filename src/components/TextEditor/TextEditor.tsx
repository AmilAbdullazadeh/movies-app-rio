import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";

interface TextCardProps {
    title: string;
    content: string;
    subtitle: string;
    onClick: () => void;
    onClickTrash: () => void;
}

export function TextCard({title, content, subtitle, onClick, onClickTrash }: TextCardProps) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const onClickTrash_ = (e: Event) => {
    e.stopPropagation();
    onClickTrash();
  }

  return (
    <div
      onClick={onClick}
      className={`card ${s.container}`}
      style={{ borderColor: isCardHovered ?"#0d6efd" : "#ced4da", cursor: 'pointer'}}
      onMouseEnter={() => setIsCardHovered(true) }
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{title}</h5>
          <Trash
            size={20}
            style={{ color: isCardHovered ? "#FF7373" : '#0d6efd', cursor: 'pointer'}}
            onClick={(e) => onClickTrash_(e)}
          />
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}>{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}
