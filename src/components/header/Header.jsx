import { NavLink } from "react-router-dom";

import Favorites from "../favorites";

import styles from "./Header.module.css";


const Header = () => {
    return (
        <>
         <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/species/?page=1">Species</NavLink></li>
                <li><NavLink to="/starships/?page=1">Star Ships</NavLink></li>
                <li><NavLink to="/vehicles/?page=1">Vehicles</NavLink></li>
                <li><NavLink to="/not-found">Not Found Page</NavLink></li>             
            </ul>
           <Favorites />
        </div>
        </>
    )
}
export default Header;

