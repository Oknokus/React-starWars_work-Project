import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import styles from "./SearchPeopleInfo.module.css";


const SearchPeopleInfo = ({ statePeopleSearch }) => {  
        return (
    <>
        {statePeopleSearch.length && (            
            <ul className={styles.list__container}>
                             
                {statePeopleSearch.map(({ id, name, img }) => 
                    <li className={ styles.list__item } key={ id }>
                        <Link to={ `/people/${ id }` }>
                            <img className={ styles.person__photo } src={ img } alt={ name } />
                            <p className={ styles.person__name }>{name}</p>
                        </Link>
                    </li>
                )} 
            </ul>)
        }
    </>
    )
}

SearchPeopleInfo.propTypes = { 
    statePeopleSearch:PropTypes.array   
}

export default SearchPeopleInfo;