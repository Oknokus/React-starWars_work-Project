import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useTheme } from "../../context/ThemeProvider";

import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from "../../context/ThemeProvider";

import droid from "../header/imgHeader/droid.svg";
import lightsaber from "../header/imgHeader/lightsaber.svg";
import spaceStation from "../header/imgHeader/space-station.svg";

import Favorites from "../favorites";

import styles from "./Header.module.css";


const Header = () => {
    const[icon, setIcon] = useState(spaceStation)

    const isTheme = useTheme();

    useEffect(()=> {
        switch (isTheme.theme) {
            case THEME_DARK: setIcon(droid)                
                break;
            case THEME_LIGHT: setIcon(lightsaber)                
                break;
            case THEME_NEITRAL: setIcon(spaceStation)                
                break;
        
            default:
                setIcon(spaceStation); 
        }
    }, [isTheme])
  
    return (
        <>
         <div className={ styles.container }>
          <img className={ styles.logo } src={ icon } alt="iconHeader" />

            <ul className={ styles.list__container }>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/species/?page=1">Species</NavLink></li>
                <li><NavLink to="/starships/?page=1">Star Ships</NavLink></li>
                <li><NavLink to="/vehicles/?page=1">Vehicles</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/not-found">Not Found Page</NavLink></li>             
            </ul>
           <Favorites />
        </div>
        </>
    )
}

export default Header;

