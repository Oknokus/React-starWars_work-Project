import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UiButton from "../../ui/uButton";


import styles from "./VehiclesNavigation.module.css";


const VehiclesNavigation = ({ nextPage, previousPage, nowPage, getDataVehicles }) => {
    const handleClickPrevious = (url) => {
        getDataVehicles(previousPage);        
    };

    const handleClickNext = (url) => {
        getDataVehicles(nextPage);        
    };

    return (
        <div className={ styles.container }>        
            <Link to={ `/vehicles/?page=${ nowPage-1 }` } className={styles.link}>
                <UiButton onClick={ handleClickPrevious } text={ "Previous" } disabled={ !previousPage } />  
            </Link>
            
            <Link to={ `/vehicles/?page=${ nowPage+1 }` } className={styles.link}>
                <UiButton onClick={ handleClickNext } text={ "Next" } disabled={ !nextPage } />                
            </Link>
        </div>
    )
}

VehiclesNavigation.propTypes = {
    nextPage: PropTypes.string,
    previousPage: PropTypes.string,
    nowPage: PropTypes.number,
    getDataVehicles: PropTypes.func
};

export default VehiclesNavigation;