import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import {FieldError} from "../FieldError/FieldError.tsx";
import {ButtonPrimary} from "../ButtonPrimary/ButtonPrimary.tsx";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

interface NoteFormProps {
    onSubmit: () => void;
    title: string;
}

// const VALIDATION_RULES

export function NoteForm({ onSubmit, title }: NoteFormProps) {
    // isEditable = true,
    //     note,
    //     onClickEdit,
    //     onClickDelete,

    const [isSubmit, setIsSubmit] = useState(false);
    const [formValues, setFormValues] = useState({ title: "", content: "" });
    const [formErrors, setFormErrors] = useState({ title: "", content: "" });


    const updateFormValues = (e: Event) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

  // const hasError action

    // const validate action

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        setIsSubmit(true);
        // validate
        // if no errors
        onSubmit(formValues);
    }

  const actionIcons = (
    <>
      <div className="col-6 cursor-pointer" style={{ cursor: 'pointer' }}  >
        <PencilFill
          className={s.action_icon}
          // onClick={}
        />
      </div>
      <div className="col-6 cursor-pointer" style={{ cursor: 'pointer' }} >
        <TrashFill
          className={s.action_icon}
          // onClick={}
        />
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        type="text"
        name="title"
        className="form-control"
        onChange={updateFormValues}
      />
        {/*FieldError*/}
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        type="text"
        name="content"
        className="form-control"
        onChange={updateFormValues}
        row="5"
      />
        {/*FieldError*/}
    </div>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary
        onClick={handleSubmit}
      >
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        <div className="d-flex justify-content-space-between col-2">{actionIcons}</div>
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
          {titleInput}
      </div>
      <div className="mb-3">
          {contentInput}
      </div>
        {onSubmit && submitBtn}
    </div>
  );
}
