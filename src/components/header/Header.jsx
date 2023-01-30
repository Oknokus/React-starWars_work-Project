import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";


const Header = () => {
    return (
        <>
         <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people">People</NavLink></li>
                <li><NavLink to="/species">Species</NavLink></li>
                <li><NavLink to="/starships">Star Ships</NavLink></li>
            </ul>
        </div>
        </>
    )
}
export default Header;

