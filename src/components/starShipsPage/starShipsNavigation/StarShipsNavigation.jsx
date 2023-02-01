import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import styles from "./StarShipsNavigation.module.css";


const StarShipsNavigation = ({ nextPage, previousPage, nowPage, getDataStarShips }) => {
    const handleClickPrevious = (url) => {
        getDataStarShips(previousPage);        
    };

    const handleClickNext = (url) => {
        getDataStarShips(nextPage);        
    };

    return (
        <div>        
            <Link to={ `/starships/?page=${ nowPage-1 }` } className={styles.link}>
                <button
                    className={styles.buttons}
                    onClick={ handleClickPrevious }
                    disabled={ !previousPage }
                >
                    Previous              
                </button>
            </Link>
            
            <Link to={ `/starships/?page=${ nowPage+1 }` } className={styles.link}>
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

StarShipsNavigation.propTypes = {
    nextPage: PropTypes.string,
    previousPage: PropTypes.string,
    nowPage: PropTypes.number,
    getDataVehicles: PropTypes.func
};

export default StarShipsNavigation;