import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from "./SpeciesList.module.css";


const SpeciesList = ({ speciesState }) => {
    return (
        <ul className={ styles.list__container }>     
        {speciesState &&      
            (
                speciesState.map(({ name, img, id }) => 
                    <li className={ styles.list__item } key={ id }>
                        <Link to={ `/species/${ id }` }>
                        <img className={ styles.person__photo } src= { img } alt={ name } />
                        <p>Name: { name }</p>                       
                        </Link>                                                 
                    </li>
                )
            ) 
            }
        </ul>
    )
}

SpeciesList.propTypes = {
    speciesState: PropTypes.array
};

export default SpeciesList;