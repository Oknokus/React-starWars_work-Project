import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UiButton from "../../Ui/uButton";

import styles from "./SpeciesNavigation.module.css";


const SpeciesNavigation = ({ nextPage, previousPage, nowPage, getDataSpecies }) => {
    const handleClickPrevious = (url) => {
        getDataSpecies(previousPage);      
    };

    const handleClickNext = (url) => {
        getDataSpecies(nextPage);       
    };

    return (
        <div className={ styles.container }>        
            <Link to={ `/species/?page=${ nowPage-1 }` } className={styles.link}>
                <UiButton onClick={ handleClickPrevious } text={ "Previous" } disabled={ !previousPage } />                  
            </Link>
            
            <Link to={ `/species/?page=${ nowPage+1 }` } className={styles.link}>
                <UiButton onClick={ handleClickNext } text={ "Next" } disabled={ !nextPage } />   
            </Link>
        </div>
    )
}

SpeciesNavigation.propTypes = {
    nextPage: PropTypes.string,
    previousPage: PropTypes.string,
    nowPage: PropTypes.number,
    getDataVehicles: PropTypes.func
};


export default SpeciesNavigation;