import { useTheme } from "../../../context/ThemeProvider";

import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from "../../../context/ThemeProvider";

// import styles from "./ChooseSide.module.css";


const ChooseSide = () => {

    const isTheme = useTheme();
   
    return(
        <>
        <button onClick={ () => isTheme.change(THEME_LIGHT) }>Light</button>
        <button onClick={ () => isTheme.change(THEME_DARK) }>Dark</button>
        <button onClick={ () => isTheme.change(THEME_NEITRAL) }>Neitral</button>       
        </>
    )
}

export default ChooseSide;