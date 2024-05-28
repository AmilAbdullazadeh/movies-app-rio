import s from "./style.module.css";

interface ButtonPrimaryProps {
    onClick: () => void;
    isDisabled?: boolean;
    children: React.ReactNode;
}

export function ButtonPrimary({onClick, isDisabled = false, children}: ButtonPrimaryProps) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type="button"
      className={`btn btn-primary ${s.button}`}
    >
        {children}
    </button>
  );
}
