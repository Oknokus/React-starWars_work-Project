import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import styles from "./SearchSpeciesInfo.module.css";


const SearchSpeciesInfo = ({ stateSpeciesSearch }) => {  
    return (
    <>
        {stateSpeciesSearch.length && (            
             <ul className={styles.list__container}>
                {stateSpeciesSearch.map(({ id, name, img }) => 
                    <li className={ styles.list__item } key={ id }>
                        <Link to={ `/species/${ id }` }>
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

SearchSpeciesInfo.propTypes = {   
    stateSpeciesSearch:PropTypes.array,  
}

export default SearchSpeciesInfo;