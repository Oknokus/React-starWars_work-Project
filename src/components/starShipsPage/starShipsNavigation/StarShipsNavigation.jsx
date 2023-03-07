import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UiButton from "../../Ui/uButton/UButton";


import styles from "./StarShipsNavigation.module.css";


const StarShipsNavigation = ({ nextPage, previousPage, nowPage, getDataStarShips }) => {
    const handleClickPrevious = (url) => {
        getDataStarShips(previousPage);        
    };

    const handleClickNext = (url) => {
        getDataStarShips(nextPage);        
    };

    return (
        <div className={ styles.container }>         
            <Link to={ `/starships/?page=${ nowPage-1 }` } className={styles.link}>
                < UiButton onClick={ handleClickPrevious } text={ "Previous" } disabled={ !previousPage } />                   
            </Link>
            
            <Link to={ `/starships/?page=${ nowPage+1 }` } className={styles.link}>
                < UiButton onClick={ handleClickNext } text={ "Next" } disabled={ !nextPage } />                
            </Link>
        </div>
    )
}

StarShipsNavigation.propTypes = {
    nextPage: PropTypes.string,
    previousPage: PropTypes.string,
    nowPage: PropTypes.number,
    getDataVehicles: PropTypes.func
};

export default StarShipsNavigation;