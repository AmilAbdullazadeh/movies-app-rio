import logoSrc from "../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import {Logo} from "../Logo/Logo.tsx";
import {ButtonPrimary} from "../ButtonPrimary/ButtonPrimary.tsx";

export function Header() {
  const navigate = useNavigate()
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          title="Trimat"
          subtitle={"Manage your notes"}
          image={logoSrc}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary
          onClick={() => navigate("/notes/new")}
        >
          Add note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
