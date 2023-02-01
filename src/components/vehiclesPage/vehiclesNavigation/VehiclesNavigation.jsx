import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import styles from "./VehiclesNavigation.module.css";


const VehiclesNavigation = ({ nextPage, previousPage, nowPage, getDataVehicles }) => {
    const handleClickPrevious = (url) => {
        getDataVehicles(previousPage);        
    };

    const handleClickNext = (url) => {
        getDataVehicles(nextPage);        
    };

    return (
        <div>        
            <Link to={ `/vehicles/?page=${ nowPage-1 }` } className={styles.link}>
                <button
                    className={styles.buttons}
                    onClick={ handleClickPrevious }
                    disabled={ !previousPage }
                >
                    Previous              
                </button>
            </Link>
            
            <Link to={ `/vehicles/?page=${ nowPage+1 }` } className={styles.link}>
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

VehiclesNavigation.propTypes = {
    nextPage: PropTypes.string,
    previousPage: PropTypes.string,
    nowPage: PropTypes.number,
    getDataVehicles: PropTypes.func
};

export default VehiclesNavigation;