import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import styles from "./SpeciesNavigation.module.css";


const SpeciesNavigation = ({ nextPage, previousPage, nowPage, getDataSpecies }) => {
    const handleClickPrevious = (url) => {
        getDataSpecies(previousPage);      
    };

    const handleClickNext = (url) => {
        getDataSpecies(nextPage);       
    };

    return (
        <div>        
            <Link to={ `/species/?page=${ nowPage-1 }` } className={styles.link}>
                <button
                    className={styles.buttons}
                    onClick={ handleClickPrevious }
                    disabled={ !previousPage }
                >
                    Previous              
                </button>
            </Link>
            
            <Link to={ `/species/?page=${ nowPage+1 }` } className={styles.link}>
                <button
                    className={styles.buttons}
                    onClick={ handleClickNext }
                    disabled={ !nextPage }
                >
                    Next              
                </button>
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