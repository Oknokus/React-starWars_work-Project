import PropTypes from 'prop-types';
import { useState, useEffect  } from 'react';
import cn from "classnames";


import loadingWhite from "./loadingImg/loadingWhite.svg";
import loadingBlue from "./loadingImg/loadingBlue.svg";
import loadingBlack from "./loadingImg/loadingBlack.svg";


import styles from "./UiLoading.module.css";


const UiLoading = ({ theme="white", isShadow, classed }) => {

    const [themeState, setthemeState] = useState(null);


    useEffect(() => {
        switch (theme) {
            case "white":
                setthemeState(loadingWhite);   
                break;
    
            case "blue":
                setthemeState(loadingBlue); 
                break;
    
            case "black":
                setthemeState(loadingBlack); 
                break;
        
            default:
                setthemeState(loadingBlack); 
        }
    }, [])
    return (
        <>        
        <img
        className={ cn( styles.loading, isShadow && styles.shadow, classed )}
        src={ themeState } alt="loading" />        
        </>
    )
}

UiLoading.propTypes = {
    theme:PropTypes.string,
    isShadow:PropTypes.bool,
    classed:PropTypes.string
}

export default UiLoading;