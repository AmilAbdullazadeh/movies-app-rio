import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";

export function TextCard(props) {
  // title, content, subtitle, onClick, onClickTrash props
  // isCardHovered, isTrashHovered states


  // onClickTrash_ action with sttop propagation

  return (
    <div
      // onClick={}
      className={`card ${s.container}`}
      style={{ borderColor: "#0d6efd" }}
      // onMouseEnter={}
      // onMouseLeave={}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title"></h5>
          <Trash
            size={20}
            // onMouseEnter={}
            // onMouseLeave={}
            style={{ color: "#FF7373"}}
            // onClick={}
          />
        </div>
        <h6 className={`card-subtitle mb-2 text-muted`}></h6>
        <p className={`card-text ${s.text_content}`}></p>
      </div>
    </div>
  );
}
