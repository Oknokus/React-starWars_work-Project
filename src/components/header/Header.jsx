import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";


const Header = () => {
    return (
        <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/people">PeoplePage</NavLink>
        </>
    )
}
export default Header;