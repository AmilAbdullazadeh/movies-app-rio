import s from "./style.module.css";

interface LogoProps {
    onClick: () => void;
    image: string;
    title: string;
    subtitle: string;
}

export function Logo({onClick, image, title, subtitle}: LogoProps) {
  return (
    <div
        onClick={onClick}
    >
      <div className={s.container}>
        <img className={s.img} src={image} alt="logo" />
        <div className={s.logo_txt}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </div>
  );
}
