import PropTypes from 'prop-types';
import cn from 'classnames';

import { useTheme } from "../../../context/ThemeProvider";

import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from "../../../context/ThemeProvider";

import darkSide from "./img/dark-side.jpg";
import falcon from "./img/falcon.jpg";
import lightSide from "./img/light-side.jpg";


import styles from "./ChooseSide.module.css";


const ChooseSideItem = ({ clases, img, text, theme }) => {
    
    const isTheme = useTheme();


    return(
        <div
            className={cn(styles.item, clases )}
            onClick={ () => isTheme.change(theme) }
        >
            <div className={ styles.item__header }>{ text }</div>
            <img className={ styles.item__img } src={ img}  alt={ text } />
        </div>
    )
} 

ChooseSideItem.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    theme: PropTypes.string,
    clases: PropTypes.string,
}


const ChooseSide = () => {
    const elements = [
        {
            text: "Light Side",           
            theme: THEME_LIGHT,
            img: lightSide,
            clases: styles.item__light,          
        },
        {
            text: "Dark Side",
            theme: THEME_DARK,
            img: darkSide,
            clases: styles.item__dark,
        },
        {
            text: "Neitral Side",   
            theme: THEME_NEITRAL,
            img: falcon,
            clases: styles.item__neitral,
        }
    ]
      

    return(

        <div className={styles.container}>
            {elements.map(({ theme, text, img, clases }, index) =>           
                <ChooseSideItem
                key={ index }
                text={ text }
                theme={ theme }
                img={ img }
                clases={ clases }
                />
            )}     

        </div>
    )
}

export default ChooseSide;