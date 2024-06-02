import {createContext} from "react";

type ThemeContextType = 'light' | 'dark'

export const ThemeContext = createContext<ThemeContextType>('light')

export const THEME = {
    light: {
        backgroundColor: 'white',
        textColor: 'black'
    },
    dark: {
        backgroundColor: 'black',
        textColor: 'white'
    }
}