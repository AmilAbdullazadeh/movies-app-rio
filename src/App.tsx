import Level1 from "./pages/Levels/Level1.tsx";
import {THEME, ThemeContext} from "./contexts/ThemeContext.ts";
import {useContext, useState} from "react";


export function App() {
    const initialTheme = useContext(ThemeContext)
    const [theme, setTheme] = useState(initialTheme)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div style={{
                color: THEME[theme].textColor,
                backgroundColor: THEME[theme].backgroundColor,
                height: '100vh',
                padding: 50
            }}>
                <Level1/>
            </div>
        </ThemeContext.Provider>
    );
}
