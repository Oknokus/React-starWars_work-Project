import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "../../../context/ThemeProvider";


import styles from "./ChooseSide.module.css";


const ChooseSide = () => {
    const istheme = useTheme();
    return (
        <>
            { istheme.theme }
            <button onClick={() => istheme.change(THEME_LIGHT)}>Light</button>
            <button onClick={() => istheme.change(THEME_DARK)}>Dark</button>
            <button onClick={() => istheme.change(THEME_NEITRAL)}>Neitral</button>
        </>
    )
}

export default ChooseSide;