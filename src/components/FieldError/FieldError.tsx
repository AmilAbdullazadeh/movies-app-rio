import s from "./style.module.css"

export function FieldError({ msg }: { msg: string }) {
  return (
    <div className={s.container} >
      {msg}
    </div>
  )
}
