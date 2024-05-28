import {Header} from "./components/Header/Header.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";


export function App() {
    return (
        <>
            <Header/>
            <div style={{ padding: 50 }} >
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}
