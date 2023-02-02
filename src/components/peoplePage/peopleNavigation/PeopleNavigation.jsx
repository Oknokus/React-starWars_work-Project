import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UiButton from "../../Ui/uButton";


import styles from "./PeopleNavigation.module.css";


const PeopleNavigation = ({ nowPage, nextPage, previousPage, getDataPeople }) => {
    const handleClickPrevious = (url) => {
        getDataPeople(previousPage);
    }

    const handleClickNext = (url) => {
        getDataPeople(nextPage);
    }

    return (
        <div className={ styles.container }>
        <Link to={ `/people/?page=${ nowPage-1 }` } className={styles.link}>
            <UiButton onClick={ handleClickPrevious } text={ "Previous" } disabled={ !previousPage } />           
        </Link>

        <Link to={ `/people/?page=${ nowPage+1 }` } className={styles.link}>
            <UiButton  onClick={ handleClickNext } text={ "Next" } disabled={ !nextPage } />  
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