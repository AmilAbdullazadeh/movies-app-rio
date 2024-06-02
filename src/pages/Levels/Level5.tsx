import {useContext, useState} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.ts";

function Level5() {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <h1>Level 5</h1>
            <p>Level 5 is the fifth level of this game.</p>

            <button
                className='font-bold bg-black text-white text-xl border-none p-2 rounded'
                onClick={toggleTheme}
            >Change theme</button>
        </div>
    );
}

export default Level5;