import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import styles from "./PeopleNavigation.module.css";


const PeopleNavigation = ({ nowPage, nextPage, previousPage, getDataPeople }) => {
    const handleClickPrevious = (url) => {
        getDataPeople(previousPage);
    }

    const handleClickNext = (url) => {
        getDataPeople(nextPage);
    }

    return (
        <div>
        <Link to={ `/people/?page=${ nowPage-1 }` } className={styles.link}>
            <button
                className={styles.buttons}
                onClick={ handleClickPrevious }
                disabled={ !previousPage }
            >
                Previous
            </button>
        </Link>

        <Link to={ `/people/?page=${ nowPage+1 }` } className={styles.link}>
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

PeopleNavigation.propTypes = {
    nowPage: PropTypes.number,
    nextPage: PropTypes.string,
    previousPage: PropTypes.string,
    getDataPeople: PropTypes.func
}

export default PeopleNavigation;